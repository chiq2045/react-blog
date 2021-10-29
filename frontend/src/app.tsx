import { NavBar } from 'components/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { AddPost } from 'views/addPost';
import { ViewPosts } from 'views/viewPosts';
import { ViewPost } from 'views/viewPost';
import { EditPost } from 'views/editPost';

export const App = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <main
          className='hero is-fullheight-with-navbar'
          style={{
            backgroundColor: 'var(--cultured)',
            color: 'var(--raisin-black)'
          }}
        >
          <div style={{ padding: '16px' }}>
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
          </div>
        </main>
      </Switch>
    </Router>
  </div>
);
