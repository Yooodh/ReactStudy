import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const Users = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users' + id)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  });

  return (
    <>
      <h1>Users</h1>
      {loading ? <Spinner /> : null}
    </>
  );
};

export default Users;
