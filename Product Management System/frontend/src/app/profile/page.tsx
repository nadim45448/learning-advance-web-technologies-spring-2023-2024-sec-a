import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get('http://localhost:8000/auth/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        });
        setUser(response.data);
      } catch (error) {
        setError('Error fetching profile');
      }
    }

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>{error || 'Loading...'}</p>
      )}
    </div>
  );
};

export default Profile;
