const About = () => {
  return (
    <div>
      <section className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center py-4'>
              <h1>About</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <img
                src='/assets/images/User.png'
                alt='Yoo'
                height='350px'
                width='300px'
              />
            </div>
            <div className='col-md-6 my-5'>
              <h1 className='display-5 mb-4'>Yoo</h1>
              <p className='lead mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laborum, iure accusamus ut unde reprehenderit
                voluptate? Assumenda voluptate perspiciatis rerum ut asperiores
                atque illo, similique unde odio harum commodi voluptatum.
              </p>

              <div className='progress my-4'>
                <div
                  className='progress-bar bg-success'
                  role='progressbar'
                  style={{ width: '80%' }}
                  aria-valuenow='80'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  HTML/HTML5
                </div>
                <span className='pro'>80%</span>
              </div>
              <div className='progress my-4'>
                <div
                  className='progress-bar bg-info'
                  role='progressbar'
                  style={{ width: '70%' }}
                  aria-valuenow='70'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  CSS
                </div>
                <span className='pro'>70%</span>
              </div>
              <div className='progress my-4'>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  style={{ width: '60%' }}
                  aria-valuenow='60'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  JavaScript
                </div>
                <span className='pro'>60%</span>
              </div>
              <div className='progress my-4'>
                <div
                  className='progress-bar bg-danger'
                  role='progressbar'
                  style={{ width: '50%' }}
                  aria-valuenow='50'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  React
                </div>
                <span className='pro'>50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
