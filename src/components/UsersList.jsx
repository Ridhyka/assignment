import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UsersList.css';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, [page]);

  return (
    <div className="users-container">
      <h2 className="users-title">User List</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} className="user-avatar" />
            <h3 className="user-name">{user.first_name} {user.last_name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="page-button">Prev</button>
        <button onClick={() => setPage(page + 1)} className="page-button">Next</button>
      </div>
    </div>
  );
}
