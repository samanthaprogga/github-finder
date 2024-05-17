import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Username:", username); // Log the received username
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-container">
      {/* Display user details */}
    </div>
  );
};

export default User;
