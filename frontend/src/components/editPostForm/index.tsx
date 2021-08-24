import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { EDITPOST } from 'utils/constants';
import { PostType } from 'utils/types';
import { Loader } from '../loaders';
import { ErrorPanel } from '../errorPanel';

export const EditPostForm = (post: PostType) => {
  const [editPost, { loading, error, data }] = useMutation(EDITPOST);

  const { control, handleSubmit, register, watch } = useForm({
    defaultValues: {
      title: post.title,
      content: post.content
    }
  });

  if (loading) {
    return <Loader loading={loading}>Submitting...</Loader>;
  }

  if (error) {
    return <ErrorPanel error={error} errorTitle='Submitting Error!' />;
  }

  return (
    <form>
      <input {...register('title')} placeholder='Title' />
    </form>
  );
};
