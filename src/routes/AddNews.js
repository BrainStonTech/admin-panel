import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
// CSS
import '../assets/css/add-news.css'
import Loader from '../components/Loader';

export default function AddNews() {
  const editorRef = useRef();

  function showCode(){
    setText(editorRef.current.getContent());
  }

  const [text, setText] = useState('');
  const [loader, setLoader] = useState(false);

  function uploadNews(e){
    e.preventDefault();

    showCode();

    if(text === ''){
      alert('Please write something');

      return;
    }

    alert('News published successfully');
  }

  return (
    <div className='add_news_page page form_page'>
      {
        loader?
        <Loader />
        : ''
      }
      <div className='container'>
        <form className='add_news_form default bg_gray bg_w' onSubmit={uploadNews}>
          <div className='form_header'>
            <h2 className='title'>Add News</h2>
          </div>

          <div className='inputs'>
            <div className='input_container'>
              <label htmlFor='title'>Title</label>
              <input id='title' name='title' type='text' placeholder='Enter title' required />
            </div>

            <div className='input_container'>
              <label htmlFor='description'>Description</label>
              <div style={{marginTop: '10px'}}>
                <Editor
                  style={{marginTop: '100px'}}
                  onInit={(ev, editor) => {editorRef.current = editor}}
                  apiKey='3ogh62yewrlr2gm3ip16cbw6h3r98qihcxnrmiezuka05i0d'
                  plugins='image code'
                  init={{
                    plugins: 'image code',
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help'
  
                  }}
                  mobile={{
                    theme: 'mobile'
                  }}
                />
              </div>
            </div>

            <div className='input_container'>
              <label htmlFor='visibility'>Visibility</label>
              <select id='visibility' name='visibility' required>
                <option value='public'>Public</option>
                <option value='private'>Private</option>
              </select>
            </div>
          </div>

          <div className='actions'>
            <button className='submit_btn'>Add News</button>
          </div>
        </form>
      </div>
    </div>
  )
}
