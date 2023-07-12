import axios from 'axios';
import { useEffect } from 'react';

const Users = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
    });
  });

  return <h1>Users</h1>;
};

export default Users;
