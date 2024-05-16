"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditUser({
  searchParams,
}: {
  searchParams: {
    id: any;
    name: any;
    company: any;
    contact: any;
  };
}) {
  const router = useRouter();
  const { id: userId, name, company, contact } = searchParams;
  const [userData, setUserData] = useState<any>({ name, companyName: company, contact });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        const response = await axios.get(`http://localhost:8000/admin/editUser/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      await axios.patch(`http://localhost:8000/admin/editUser/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/adminPages/user');
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-8">Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className=" border rounded w-full py-2 px-3 text-gray-700 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={userData.companyName}
              onChange={handleInputChange}
              className=" border rounded w-full py-2 px-3 text-gray-700 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={userData.contact}
              onChange={handleInputChange}
              className=" border rounded w-full py-2 px-3 text-gray-700 "
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
