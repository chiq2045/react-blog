import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Post, Post as PostComponent } from 'components/post';

const POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      dateCreated
      dateModified
    }
  }
`;
type Post = {
  id: number;
  title: string;
  content: string;
  dateCreated: string;
  dateModified: string;
};

// type PostType = {
//   id: number;
//   title: string;
//   content: string;
//   dateCreated: Date;
//   dateModified: Date | null;
// };

export const ViewPosts = () => {
  const { loading, error, data } = useQuery<{ posts: Array<Post> }>(POSTS);
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

  // console.log(data?.posts[0]);
  // const posts: Array<PostType> = data
  //   ? data.posts.map((v) => {
  //       return {
  //         ...v,
  //         dateCreated: new Date(v.dateCreated),
  //         dateModified: v.dateModified !== '' ? new Date(v.dateModified) : null
  //       };
  //     })
  //   : [];

  return (
    <div>
      {data?.posts.map((v: Post) => (
        <div className='px-2 py-1' key={v.id}>
          <PostComponent post={v} />
        </div>
      ))}
    </div>
  );
};
