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
      id
      title
      content
      draft
      dateCreated
      dateModified
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost($id: Int, $title: String!, $content: String!, $draft: String!) {
    saveDraft(id: $id, title: $title, content: $content, draft: $draft) {
      id
      title
      content
      draft
      dateCreated
      dateModified
    }
  }
`;

export const SAVE_DRAFT = gql`
  mutation saveDraft($id: Int, $title: String!, $draft: String!) {
    saveDraft(id: $id, title: $title, draft: $draft) {
      id
      title
      content
      draft
      dateCreated
      dateModified
    }
  }
`;
