import React from 'react';
import { useQuery } from '@apollo/client';
import { Post } from 'components/post';
import { PostType } from 'utils/types';
import { GETPOSTS, sortByDate } from 'utils/constants';
import { Loader } from 'components/loaders';

export const ViewPosts = () => {
  const {
    loading: getLoading,
    error: getError,
    data: getData
  } = useQuery<{ posts: Array<PostType> }>(GETPOSTS);

  if (getLoading) {
    return <Loader loading={getLoading}>Loading...</Loader>;
  }

  if (getError) {
    return (
      <section className='content'>
        <div className='toast toast--primary'>
          <button className='btn-close'></button>
          <h4 className='toast__title'>Error</h4>
          <p>{getError.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className='content'>
      {getData?.posts ? (
        sortByDate(getData?.posts).map((v) => (
          <div className='py-1' key={v.id}>
            <Post post={v} />
          </div>
        ))
      ) : (
        <div className='placeholder'>
          <div className='placeholder-icon'>
            <span className='icon'>
              <i className='fa fa-wrapper fa-coffee x-large'></i>
            </span>
          </div>
          <h6 className='placeholder-title'>
            The sever is currently taking a nap.
          </h6>
          <div className='placeholder-subtitle'>
            Come back in a few hours or press the refresh button.
          </div>
          <div className='placeholder-commands u-center'>
            <div className='m-1'>
              <button className='btn-primary'>Refresh</button>
            </div>
            <div className='m-1'>
              <button>Home</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
