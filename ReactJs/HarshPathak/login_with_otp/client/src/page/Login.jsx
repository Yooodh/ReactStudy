import React from 'react';
import '../styles/mix.css';
import { NavLink } from 'react-router-dom';

export const Login = () => {
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
                placeholder='Enter Your Email Address'
              />
            </div>
            <button className='btn'>Login</button>
            <p>
              Don't have and account <NavLink to='/register'>Sign up</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
