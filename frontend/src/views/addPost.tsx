import React from 'react';

export const AddPost = () => {
  return (
    <>
      <h1 className='title is-1'>New Post</h1>
      <label className='label'>Title</label>
      <input className='input' type='text' placeholder='Title' />
    </>
  );
};
