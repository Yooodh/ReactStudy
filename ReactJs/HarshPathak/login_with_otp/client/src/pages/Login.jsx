import React from 'react';
import '../styles/mix.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  // console.log(email);

  // sendotp
  const sendOtp = (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Enter Your Email !');
    } else if (!email.includes('@')) {
      toast.error('Enter Valid Email !');
    } else {
      toast.success('login done');
    }
  };

  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id=''
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email Address'
              />
            </div>
            <button className='btn' onClick={sendOtp}>
              Login
            </button>
            <p>
              Don't have and account <NavLink to='/register'>Sign up</NavLink>
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
