import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { SAVE_DRAFT, SAVE_POST } from 'utils/constants';
import { Toast } from 'utils/types';

export const useUpdatePosts = (
  title: string,
  content: string,
  addToast: (toast: Toast) => void
) => {
  const { push } = useHistory();
  const [saveDraft, { loading: isSavingDraft }] = useMutation(SAVE_DRAFT, {
    update: (cache, { data: { saveDraft } }) => {
      console.log(cache);
      cache.modify({
        fields: {
          posts: (existingPosts = []) => {
            const newDraftRef = cache.writeQuery({
              data: saveDraft,
              query: SAVE_DRAFT
            });
            return [...existingPosts, newDraftRef];
          }
        }
      });
    },
    onCompleted: () => push('/posts'),
    variables: { title, draft: content },
    onError: (e) =>
      addToast({
        id: e.name,
        value: e.message
      })
  });

  const [savePost, { loading: isSavingPost }] = useMutation(SAVE_POST, {
    update: (cache, { data: { savePost } }) => {
      console.log(cache);
      cache.modify({
        fields: {
          posts: (existingPosts = []) => {
            const newPostRef = cache.writeQuery({
              data: savePost,
              query: SAVE_POST
            });
            return [...existingPosts, newPostRef];
          }
        }
      });
    },
    onCompleted: () => push('/posts'),
    variables: { title, content },
    onError: (e) =>
      addToast({
        id: e.name,
        value: e.message
      })
  });

  return { saveDraft, isSavingDraft, savePost, isSavingPost };
};
