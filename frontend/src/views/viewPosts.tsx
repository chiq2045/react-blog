import React from 'react';
import { useQuery } from '@apollo/client';
import { Post } from 'components/post';
import { PostType } from 'utils/types';
import { POSTS, sortByDate } from 'utils/constants';

export const ViewPosts = () => {
  const { loading, error, data } = useQuery<{ posts: Array<PostType> }>(POSTS);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <div className='p-2 pr-4'>
        <div className='toast toast--primary'>
          <button className='btn-close'></button>
          <h4 className='toast__title'>Error</h4>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {data?.posts ? (
        sortByDate(data?.posts).map((v) => (
          <div className='px-2 py-1' key={v.id}>
            <Post post={v} />
          </div>
        ))
      ) : (
        <div className='px-2 py-1'>
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
        </div>
      )}
    </div>
  );
};
