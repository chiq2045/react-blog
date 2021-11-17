import { ApolloError } from '@apollo/client';
import React, { useMemo } from 'react';
import { Post } from 'utils/types';
import sanitizeHtml from 'sanitize-html';
import striptags from 'striptags';

interface Props {
  posts: Array<Post> | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}
export const ViewPosts = ({ posts, loading, error }: Props) => {
  const postsArray = useMemo(() => {
    return Object.values(posts ?? []);
  }, [posts]);

  const displaySummary = (htmlString: string, maxCharacterCount =200) => {
    const text = striptags(sanitizeHtml(htmlString)).trim();
    if (text.length < maxCharacterCount) {
      return text;
    }
    return `${text.substring(0, maxCharacterCount)}...`;
  };
  return (
    <>
      <h1>Overview</h1>
      {loading ? (
        <div className='animated loading hide-text'>Loading...</div>
      ) : (
        <ul className='no-bullets'>
          {postsArray.length > 0 &&
            postsArray.map((p) => {
              return (
                <li key={p.id}>
                  <div className='card'>
                    <div className='content'>
                      {console.log(p)}
                      <p className='title'>{p.title}</p>
                      <p className='subtitle'>
                        {new Date(
                          parseInt(
                            p.dateModified ? p.dateModified : p.dateCreated
                          )
                        ).toDateString()}
                      </p>
                      <p>
                        {displaySummary(p.content)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
