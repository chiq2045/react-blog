import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      content
      draft
      dateCreated
      dateModified
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      title
      content
      draft
      dateCreated
      dateModified
    }
  }
`;

export const SAVE_POST = gql`
  mutation addPost($title: String!, $content: String!) {
    savePost(title: $title, content: $content) {
      title
      content
      dateCreated
    }
  }
`;

export const EDIT_POST = gql`
  query editPost($id: Int, $title: String!, $content: String!, $draft: String!) {
    saveDraft(id: $id, title: $title, content: $content, draft: $draft) {
      title
      draft
      conent
      dateModified
    }
  }
`;

export const SAVE_DRAFT = gql`
  query saveDraft($id: Int, $title: String!, $draft: String!) {
    saveDraft(id: $id, title: $title, draft: $draft) {
      title
      draft
      dateModified
    }
  }
`;
