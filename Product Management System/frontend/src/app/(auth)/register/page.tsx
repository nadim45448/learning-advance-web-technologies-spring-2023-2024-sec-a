"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        name,
        email,
        password
      });

      if (!response.data.success) {
        throw new Error('Registration failed');
      }


      await router.push('/login');
    } catch (error) {
      console.log('Registration failed:');
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <h1>Register</h1>

        <input
          placeholder="Name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
