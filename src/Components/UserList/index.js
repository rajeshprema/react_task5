import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    // Fetch user data from your API or database and set it to the state
    // Example: fetchUsers().then(data => setUsers(data));
  }, []);

    return (
        <div>
<h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>


        </div>
    )
}
export default UserList;