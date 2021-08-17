import { gql } from '@apollo/client';
import { PostType } from 'utils/types';

export const POSTS = gql`
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

export const formatSaveDate = (dateString: string) =>
  new Date(dateString).getTime();

export const formatDisplayDate = (dateString: string) => {
  const date = new Date(parseInt(dateString));
  return new Intl.DateTimeFormat('en-GB').format(date);
};

export const sortByDate = (posts: Array<PostType>, order: 'asc' | 'desc' = 'desc') => posts.sort((a, b) => order === 'desc' ? parseInt(b.dateCreated) - parseInt(a.dateCreated) : parseInt(a.dateCreated) - parseInt(b.dateCreated));
