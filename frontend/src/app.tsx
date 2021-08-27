import React from 'react';
import {Header} from 'components/header';
import { ViewPosts } from 'views/viewPosts';
import {Footer} from 'components/footer';

export const App = () => (
  <div>
    <Header />
    <ViewPosts />
    <Footer />
  </div>
);
