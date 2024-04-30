import axios from 'axios';
import router from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login', { email, password });
      const { jwt } = response.data;
      
      localStorage.setItem('token', jwt);
      
      router.push('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleChangeEmail} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handleChangePassword} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
