import { NavBar } from 'components/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { AddPost } from 'views/addPost';
import { ViewPosts } from 'views/viewPosts';
import { ViewPost } from 'views/viewPost';
import { EditPost } from 'views/editPost';
import { GET_POSTS } from 'utils/constants';
import { useQuery } from '@apollo/client';
import { useToasts } from 'utils/hooks/useToasts';
import { Toast } from 'components/toast';
import { Toast as ToastType } from 'utils/types';
import {Home} from 'views/Home';

export const App = () => {
  const { toasts, addToast, removeToast } = useToasts();
  const { loading, error, data } = useQuery(GET_POSTS, {
    onError: (e) =>
      addToast({
        id: e.name,
        value: e.message
      })
  });

  const showToast = (toast: ToastType, index: number) => (
    <Toast
      key={toast.id}
      value={toast.value}
      onClose={() => removeToast(toast.id)}
      index={index}
    />
  );

  return (
    <Router>
      <NavBar />
      {toasts.length > 0 && toasts.map(showToast)}
      <main className='padtop'>
        <div className='space xlarge' />
        <div className='space large' />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home posts={data?.posts ?? []} />
            </Route>
            <Route exact path='/posts'>
              <ViewPosts posts={data?.posts} loading={loading} error={error} />
            </Route>
            <Route path='/posts/edit/:id'>
              <EditPost />
            </Route>
            <Route path='/posts/new'>
              <AddPost addToast={addToast} />
            </Route>
            <Route path='/posts/view/:id'>
              <ViewPost />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};
