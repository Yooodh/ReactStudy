import { useState } from 'react';

const Contact = () => {
  // Create State
  const [data, setData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const submitHandle = (event) => {
    // To Prevent Page to Reload
    event.preventDefault();
    alert(`Name: ${data.name}, Email: ${data.email}, msg: ${data.msg}`);
  };

  return (
    <div>
      <section className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-2 text-center py-4 mb-5'>
              <h1>Contact</h1>
              <hr />
            </div>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-8 mb-5'>
                <form onSubmit={submitHandle}>
                  <div className='mb-3'>
                    <label
                      htmlFor='exampleInputPassword1'
                      className='form-label'
                    >
                      Fullname
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      name='name'
                      onChange={eventHandler}
                      value={data.name}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Email address
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      name='email'
                      onChange={eventHandler}
                      value={data.email}
                    />
                    <div id='emailHelp' className='form-text'>
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label
                      for='exampleFormControlTextarea1'
                      className='form-label'
                    >
                      Example textarea
                    </label>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows='3'
                      name='msg'
                      onChange={eventHandler}
                      value={data.msg}
                    ></textarea>
                  </div>
                  <button type='submit' className='btn btn-outline-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
