import { NavBar } from 'components/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { AddPost } from 'views/addPost';
import { ViewPosts } from 'views/viewPosts';
import { ViewPost } from 'views/viewPost';
import { EditPost } from 'views/editPost';
import { usePosts } from 'utils/hooks/usePosts';

export const App = () => {
  const { savePost, saveDraft, error, loading } = usePosts();
  return (
    <Router>
      <NavBar />
      <main className='padtop'>
        <div className='space xlarge' />
        <div className='space xlarge' />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              Blog
            </Route>
            <Route exact path='/posts'>
              <ViewPosts />
            </Route>
            <Route path='/posts/edit/:id'>
              <EditPost />
            </Route>
            <Route path='/posts/new'>
              <AddPost
                saveDraft={saveDraft}
                savePost={savePost}
                error={error.saveError ?? error.draftError ?? undefined}
                isSavingDraft={loading.isSavingDraft}
                isSavingPost={loading.isSavingPost}
              />
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
