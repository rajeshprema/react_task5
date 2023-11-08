import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>User Profile</h2>
      <p>User ID: {id}</p>
      {/* Display user profile details */}
    </div>
  );
        
    
}
export default UserProfile;