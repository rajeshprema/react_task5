import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {

    const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data by ID from your API or database and set it to the state
    // Example: fetchUserById(id).then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }


    return (
        <div>
<div>
      <h2>Edit User</h2>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
      {/* Add form to edit user details */}
    </div>
  

        </div>
    )
}
export default EditUser;