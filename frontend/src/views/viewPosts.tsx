import React from 'react';
import { useQuery } from '@apollo/client';
import { PostCard } from 'components/post';
import { PostType } from 'utils/types';
import { GETPOSTS, sortByDate } from 'utils/constants';
import { Loader } from 'components/loaders';
import { ErrorPanel } from 'components/errorPanel';
import { Placeholder } from 'components/placeholder';

export const ViewPosts = () => {
  const { loading, error, data } =
    useQuery<{ posts: Array<PostType> }>(GETPOSTS);

  if (loading) {
    return <Loader loading={loading}>Loading...</Loader>;
  }

  if (error) {
    return <ErrorPanel error={error} errorTitle={<p>Error!</p>} />;
  }

  return (
    <section className='content'>
      {data?.posts ? (
        sortByDate(data?.posts).map((v) => (
          <div className='py-1' key={v.id}>
            <PostCard post={v} />
          </div>
        ))
      ) : (
        <Placeholder
          title='There are no posts'
          subtitle='Move along, there is nothing to see here. Or you can try again'
        />
      )}
    </section>
  );
};
