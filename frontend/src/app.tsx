import { NavBar } from 'components/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { AddPost } from 'views/addPost';
import { ViewPosts } from 'views/viewPosts';
import { ViewPost } from 'views/viewPost';
import { EditPost } from 'views/editPost';

export const App = () => (
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
            <AddPost />
          </Route>
          <Route path='/posts/view/:id'>
            <ViewPost />
          </Route>
        </Switch>
      </div>
    </main>
  </Router>
);
