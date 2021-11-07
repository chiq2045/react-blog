import { useLazyQuery, useQuery } from '@apollo/client';
import { EDIT_POST, GET_POSTS, SAVE_POST } from 'utils/constants';
import { Post } from 'utils/types';

export const usePosts = () => {
  const {
    loading: isLoadingPosts,
    error: postsError,
    data: posts
  } = useQuery<Array<Post>>(GET_POSTS);

  const [
    savePost,
    { loading: isSavingPost, error: saveError, data: saveData }
  ] = useLazyQuery(SAVE_POST);

  const [
    editPost,
    { loading: isSavingEditedPost, error: editError, data: editData }
  ] = useLazyQuery(EDIT_POST);

  const [
    saveDraft,
    { loading: isSavingDraft, error: draftError, data: draftData }
  ] = useLazyQuery(EDIT_POST);

  return {
    loading: {
    isLoadingPosts,
    isSavingPost,
    isSavingEditedPost,
    isSavingDraft,
    },
    data: {
    posts,
    saveData,
    draftData,
    editData,
    },
    error: {
    saveError,
    postsError,
    editError,
    draftError,
    },
    savePost,
    editPost,
    saveDraft,
  };
};
