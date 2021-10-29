import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const AddPost = () => {
  const [content, setContent] = useState('');

  return (
    <>
      <div className='block'>
        <h1 className='title is-1'>New Post</h1>
      </div>
      <div className='block'>
        <label className='label'>Title</label>
        <input className='input' type='text' placeholder='Title' />
      </div>
      <div className='block box'>
        {/* <label className='label'>Content</label> */}
        <ReactQuill aria-label='content' theme='snow' value={content} onChange={setContent}>
          <div
            className='textarea'
            style={{ height: '50vh' }}
          />
        </ReactQuill>
      </div>
      <div className='block'>
        <div className='columns'>
          <div className='column'>
            <button
              className='button is-medium is-fullwidth is-danger'
              type='button'
            >
              Cancel
            </button>
          </div>
          <div className='column'>
            <button
              className='button is-medium is-fullwidth is-primary'
              type='button'
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
