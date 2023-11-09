import { DATA } from '../';

const Product = () => {
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className='row'>{DATA.map(cardItem)}</div>
    </div>
  );
};

export default Product;
