import React, { useEffect, useState } from 'react';
import { Table, Spinner, Pagination } from 'react-bootstrap';
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
                        <td>
                          <img
                            src={element.thumbnail}
                            style={{ width: 60, height: 60 }}
                            alt=''
                          />
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <div className='d-flex justify-content-center mt-4'>
                  Loading... <Spinner animation='border' variant='danger' />
                </div>
              )}
            </tbody>
          </Table>
        </div>

        <div className='d-flex justify-content-end'>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Home;
