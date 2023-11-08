import React, { useState} from "react";


const CreateUser = () => {

   const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to create a new user using the provided name
    // Example: createUser({ name });
  };


    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>

    
    );
};
export default CreateUser;