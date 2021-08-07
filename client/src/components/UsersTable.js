import { useState, useEffect } from 'react';
import axios from 'axios';

import UsersTableRow from './UsersTableRow';

const UsersTable = props => {
  // state
  const [users, setUsers] = useState([]);
  // fetch users
  useEffect(() => {
    axios.get('/api/users', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => setUsers(res.data));
  }, []);
  // helpers
  const deleteUser = id => {
    axios.delete('/api/users/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => setUsers(users.filter(user => user._id !== id)));
  };
  const updateUser = (id, data) => {
    axios.put('/api/users/' + id, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        const newUsers = users.map(user =>
          user._id === id ? res.data : user
        );
        setUsers(newUsers);
      });
  };
  // render
  return (
    <div className="UsersTable">
      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th colspan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UsersTableRow
              key={user._id}
              user={user}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
