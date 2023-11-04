import React from 'react';

const Calculator = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-6 fw-bolder text-center text-primary'>
              CALCULATOR
            </h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card border-primary mb-3'>
              <div className='card-body text-primary'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
