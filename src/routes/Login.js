import React, { useEffect } from 'react'
import $ from 'jquery'
// CSS
import '../assets/css/form-page.css'

export default function Login({ setUser }) {

  function authenticate(e){
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if(username === 'admin' && password === 'FORHAD123'){
      setUser(true);
    }
  }

  useEffect(() => {
    $('.App').addClass('nonav');
  }, []);

  return (
    <div className='login_page form_page page'>
      <div className='container'>
        <form className='login_form default' onSubmit={authenticate}>
          <div className='form_header'>
            <h2 className='title'>Authentication</h2>
          </div>
  
          <div className='inputs'>
            <div className='input_container'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' placeholder='Username' />
            </div>
  
            <div className='input_container'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' placeholder='Password' />
            </div>
          </div>
  
          <div className='actions'>
            <button type='submit' className='submit_btn'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
