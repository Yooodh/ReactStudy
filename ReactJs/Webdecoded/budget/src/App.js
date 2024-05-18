import './App.css';
import BalanceReview from './BalanceReview';
import './styles.css';

function App() {
  return (
    <div className='App'>
      <BalanceReview amount={500} currency='$' />
    </div>
  );
}

export default App;
