import React from 'react';

type PostType = {
  id: number;
  title: string;
  content: string;
  dateCreated: string;
  dateModified: string;
};

interface Props {
  post: PostType;
}

export const Post = ({post}: Props) => {
  // const dateOfPost = post.dateModified ? post.dateModified : post.dateCreated;
  return (
    <div className='tile p-1 bg-gray-200 u-round'>
      <div className='tile__icon'>
        <figure className='avatar'>
          <img src='https://via.placeholder.com/200' />
        </figure>
      </div>
      <div className='tile__container'>
        <p className='tile__title m-0'>
          {post.title}
        </p>
        <p className='tile__subtitle m-0'>
          {post.content}
        </p>
        {/* <span className='info'>{new Intl.DateTimeFormat('en-GB').format(dateOfPost)}</span> */}
      </div>
    </div>
  );
};
