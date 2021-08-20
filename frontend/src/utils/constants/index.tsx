import { gql } from '@apollo/client';
import { PostType } from 'utils/types';

export const GETPOSTS = gql`
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

export const EDITPOST = gql`
  mutation EditPost($id: Int!, $title: String!, $content: String!) {
    editPost(id: $id, title: $title, content: $content) {
      id
      title
      content
      dateCreated
      dateModified
    }
  }
`;

export const ADDPOST = gql`
  query AddPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
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

export const sortByDate = (
  posts: Array<PostType>,
  order: 'asc' | 'desc' = 'desc'
) =>
  posts.sort((a, b) =>
    order === 'desc'
      ? parseInt(b.dateCreated) - parseInt(a.dateCreated)
      : parseInt(a.dateCreated) - parseInt(b.dateCreated)
  );
