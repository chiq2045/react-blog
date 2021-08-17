import React from 'react';
import { PostType } from 'utils/types';
import {formatDisplayDate} from 'utils/constants';

interface Props {
  post: PostType;
}

export const Post = ({post}: Props) => {
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
        <span className='info'>{formatDisplayDate(post.dateModified ? `(Edited: ${post.dateModified})` : post.dateCreated)}</span>
      </div>
    </div>
  );
};
