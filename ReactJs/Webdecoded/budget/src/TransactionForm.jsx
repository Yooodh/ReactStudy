import React, { useState } from 'react';

const TransactionForm = ({ title, onsubmit }) => {
  const [amount, setAmount] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onsubmit(amount);
  };

  return (
    <form>
      <label>
        {`Amount to ${title}`}
        <input
          type='text'
          name='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type='submit' onClick={onFormSubmit}>
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
