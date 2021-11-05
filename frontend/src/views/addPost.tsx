import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const AddPost = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [cancel, setCancel] = useState(false);

  const handleSaveDraft = () => console.log('save draft', { title, content });
  const handleSavePost = () => console.log('save post', { title, content });
  const handleCancel = () => {
    setCancel(true);
    console.log('cancel new post');
  };

  useEffect(() => {
    if (!cancel) {
      return handleSaveDraft();
    }
  });
  return (
    <>
      <h1 className='title is-1'>New Post</h1>
      <label>Title</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <div className='pt-1'>
        <ReactQuill
          aria-label='content'
          theme='snow'
          value={content}
          onChange={(v) => setContent(v)}
          modules={{
            toolbar: [
              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              [{ align: [] }],
              [{ header: 1 }, { header: 2 }], // custom button values
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['blockquote', 'code-block'],
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              ['clean'] // remove formatting
            ]
          }}
        >
          <div style={{ height: '50vh' }} />
        </ReactQuill>
      </div>
      <div className='u-none u-inline-md'>
        <div className='pt-1 u-flex u-justify-space-between'>
          <button className='w-30' type='button' onClick={handleCancel}>
            Cancel
          </button>
          <button
            className='btn-dark w-30'
            type='submit'
            onClick={handleSaveDraft}
            disabled={!content && !title}
          >
            Save Draft
          </button>
          <button
            className='btn-dark w-30'
            type='submit'
            onClick={handleSavePost}
            disabled={!content && !title}
          >
            Create Post
          </button>
        </div>
      </div>
      <div className='u-inline u-none-md'>
        <div className='w-100 pt-1'>
          <button
            className='btn-danger h-100 w-50 pr-1'
            type='button'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className='btn-dark w-50 pl-1'
            type='submit'
            onClick={handleSaveDraft}
            disabled={!content && !title}
          >
            Save Draft
          </button>
          <button
            className='btn-dark w-100'
            type='submit'
            onClick={handleSavePost}
            disabled={!content && !title}
          >
            Create Post
          </button>
        </div>
      </div>
    </>
  );
};
