import axios from 'axios';
import { useState } from 'react';

interface Props {
  productId: string; 
}

const DeleteProduct: React.FC<Props> = ({ productId }) => {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/products/${productId}`);
      setSuccessMessage('Product deleted successfully!');
    } catch (error) {
      setError('An error occurred while deleting the product.');
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
