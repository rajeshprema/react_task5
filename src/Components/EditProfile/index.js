import React from "react";
import{ useParams } form 'react-router-dom'

const EditProfile = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Edit Profile</h2>
            <p>User ID: {id}</p>
            {/* Add form to edit user profile */}
        </div>
    );
};
export default EditProfile;