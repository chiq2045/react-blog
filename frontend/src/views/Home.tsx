import React from 'react';
import striptags from 'striptags';
import { Post } from 'utils/types';
import sanitizeHtml from 'sanitize-html';
import {useHistory} from 'react-router-dom';

export const Home = ({ posts }: { posts: Array<Post> }) => {
  const {push} = useHistory();

  const displaySummary = (htmlString: string, maxCharacterCount = 200) => {
    const text = striptags(sanitizeHtml(htmlString)).trim();
    if (text.length < maxCharacterCount) {
      return text;
    }
    return `${text.substring(0, maxCharacterCount)}...`;
  };

  console.log(posts);
  const recentPosts = posts.length > 0 ? posts
    .sort((a, b) => parseInt(b.dateCreated) - parseInt(a.dateCreated))
    .slice(0, 10) : [];

  return (
    <ul className='no-bullets'>
      {recentPosts.map((p) => (
        <li key={p.id}>
          <div className='tile u-shadow p-1 mb-1 hover-grow'>
            <button
              className='tile__container btn-transparent u-text-left'
              style={{ backgroundColor: 'transparent', textTransform: 'none' }}
              onClick={() => push(`/posts/view/${p.id}`)}
            >
              <p className='tile__title pb-1'>{p.title}</p>
              <p className='tile__subtitle'>{displaySummary(p.content)}</p>
              <span className='info'>
                {new Date(
                  parseInt(p.dateModified ? p.dateModified : p.dateCreated)
                ).toDateString()}
              </span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
