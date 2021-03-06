import React, { useState } from 'react';
import parse from 'html-react-parser';
import ReactQuill from 'react-quill';
import { useHistory } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { Toast } from 'utils/types';
import { useUpdatePosts } from 'utils/hooks/usePosts';

interface Props {
  addToast: (toast: Toast) => void;
}
export const AddPost = ({ addToast }: Props) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tab, setTab] = useState(0);

  const { goBack } = useHistory();

  const { savePost, saveDraft, isSavingDraft, isSavingPost } = useUpdatePosts(
    title,
    content,
    addToast
  );

  return (
    <form>
      <h1 className='title is-1'>New Post</h1>
      <label>Title</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <div className='pt-1'>
        <div className='tab-container tabs-classic'>
          <ul className='mb-0 mx-2'>
            <li className={tab === 0 ? 'selected' : ''}>
              <button
                className='btn-info outline tab-item-content'
                onClick={() => setTab(0)}
              >
                Edit
              </button>
            </li>
            <li className={tab === 1 ? 'selected' : ''}>
              <button
                className='btn-info outline tab-item-content'
                onClick={() => setTab(1)}
              >
                Preview
              </button>
            </li>
          </ul>
        </div>
        {tab === 0 ? (
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
            <div role='textbox' style={{ height: '50vh' }} />
          </ReactQuill>
        ) : (
          <article style={{ height: '50vh' }}>{parse(content)}</article>
        )}
      </div>
      <div className='u-none u-inline-md'>
        <div className='pt-1 u-flex u-justify-space-between'>
          <button className='w-30' type='button' onClick={goBack}>
            Cancel
          </button>
          <button
            className={`btn-dark w-30 ${
              isSavingDraft ? 'loading btn--pilled' : ''
            }`}
            type='submit'
            onClick={() => saveDraft()}
            disabled={!content || !title}
          >
            Save Draft
          </button>
          <button
            className={`btn-dark w-30 ${
              isSavingPost ? 'loading btn--pilled' : ''
            }`}
            type='submit'
            onClick={() => savePost()}
            disabled={!content || !title}
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
            onClick={goBack}
          >
            Cancel
          </button>
          <button
            className={`btn-dark w-50 pl-1 ${
              isSavingDraft ? 'loading btn--pilled' : ''
            }`}
            type='submit'
            onClick={() => saveDraft()}
            disabled={!content || !title}
          >
            Save Draft
          </button>
          <button
            className={`btn-dark w-100 ${
              isSavingPost ? 'loading btn--pilled' : ''
            }`}
            type='submit'
            onClick={() => savePost()}
            disabled={!content || !title}
          >
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
};
