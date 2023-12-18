import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  console.log(data);

  const getdata = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    // console.log(response.data.products);
    setData(response.data.products);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className='container'>
        <h1>User Data</h1>
        <div className='table_div mt-3'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Price</th>
                <th>Title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((element, index) => {
                  return (
                    <>
                      <tr>
                        <td>{element.id}</td>
                        <td>{element.price}</td>
                        <td>{element.title}</td>
                        <td>@mdo</td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <div>loading</div>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Home;
