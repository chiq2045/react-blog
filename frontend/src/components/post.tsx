import React from 'react';
import { PostType } from 'utils/types';
import { formatDisplayDate } from 'utils/constants';

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  return (
    <div className='card card--slide-up'>
      <div className='card__container'>
        <div
          className='card__image'
          style={{
            backgroundImage: 'https://unsplash.it/640/480?random&amp;blur'
          }}
        ></div>
      </div>
      <div className='card__mobile-title'>
        <div className='content'>
          <div className='tile'>
            <div className='tile__container'>
              <p className='tile__title'>{post.title}</p>
              {/* <p className='tile__subtitle'>By John Doe</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='card__body content'>
        {post.content}
      </div>
      <div className='card__footer content'>{post.dateModified ? `Modified: ${formatDisplayDate(post.dateModified)}` : formatDisplayDate(post.dateCreated)}</div>
    </div>
  );
};
