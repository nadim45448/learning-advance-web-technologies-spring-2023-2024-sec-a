import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  price: number;
  description: string;
}

interface ErrorResponse {
  message: string;
}

const UpdateProduct = ({ productId }: { productId: string }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string>(''); 
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product>(`http://localhost:8000/products/${productId}`);
        const { name, price, description } = response.data;
        setName(name);
        setPrice(price.toString()); 
        setDescription(description);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorResponse>;
          setError(axiosError.response?.data?.message || 'Failed to fetch product details.');
        } else {
          setError('An error occurred while fetching product details.');
        }
      }
    };

    fetchData();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.put<Product>(`http://localhost:8000/products/${productId}`, {
        name,
        price: parseFloat(price), // Parse price to number before sending
        description,
      });

      setSuccessMessage('Product updated successfully!');
      // Optionally, you can redirect the user to another page or reset the form
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        setError(axiosError.response?.data?.message || 'An error occurred while updating the product.');
      } else {
        setError('An error occurred while updating the product.');
      }
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
