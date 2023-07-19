import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  });

  return (
    <>
      <h1>User 정보</h1>
      {loading ? <Spinner /> : <UserList users={users} />}
    </>
  );
};

export default User;
