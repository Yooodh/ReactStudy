import React from 'react';
import { useState } from 'react';
import TransactionForm from './TransactionForm';

const BalanceReview = ({ amount, currency }) => {
  const [balance, setBalance] = useState(amount);
  const [modalOpen, setModalOpen] = useState('');

  const onTransactionSubmit = (transactionAmount) => {
    let updateBalance;
  };

  return (
    <div className='balance-review-container light-grey'>
      <div className='balance-info'>
        <h1>Balance</h1>
        <p>
          {amount} {currency}
        </p>
      </div>
      <div className='buttons-wrapper'>
        {modalOpen !== 'Deposit' && (
          <button className='green' onClick={() => setModalOpen('Deposit')}>
            Deposit
          </button>
        )}
        {modalOpen !== 'Widthdraw' && (
          <button className='red' onClick={() => setModalOpen('Widthdraw')}>
            Widthdraw
          </button>
        )}
      </div>
      {modalOpen !== '' && (
        <TransactionForm
          title={modalOpen}
          onSubmit={() => console.log('submitted')}
        />
      )}
    </div>
  );
};

export default BalanceReview;
