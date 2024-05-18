import React from 'react';
import { useState } from 'react';
import TransactionForm from './TransactionForm';

const BalanceReview = ({ amount, currency }) => {
  const [balance, setBalance] = useState(amount);
  const [modalOpen, setModalOpen] = useState('');

  const onTransactionSubmit = (transactionAmount) => {
    let updateBalance;
    switch (modalOpen) {
      case 'Deposit':
        updateBalance = balance + parseInt(transactionAmount);
        break;
      case 'Withdraw':
        updateBalance = balance - parseInt(transactionAmount);
        break;
      default:
        break;
    }
    setBalance(updateBalance);
    setModalOpen('');
  };

  return (
    <div className='balance-review-container light-grey'>
      <div className='balance-info'>
        <h1>Balance</h1>
        <p>
          {balance} {currency}
        </p>
      </div>
      <div className='buttons-wrapper'>
        {modalOpen !== 'Deposit' && (
          <button className='green' onClick={() => setModalOpen('Deposit')}>
            Deposit
          </button>
        )}
        {modalOpen !== 'Withdraw' && (
          <button className='red' onClick={() => setModalOpen('Withdraw')}>
            Withdraw
          </button>
        )}
      </div>
      {modalOpen !== '' && (
        <TransactionForm title={modalOpen} onSubmit={onTransactionSubmit} />
      )}
    </div>
  );
};

export default BalanceReview;
