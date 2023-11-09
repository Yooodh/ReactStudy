import { Link } from 'react-router-dom';

const CartBtn = () => {
  return (
    <>
      <Link to='/' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span> Cart (0)
      </Link>
    </>
  );
};

export default CartBtn;
