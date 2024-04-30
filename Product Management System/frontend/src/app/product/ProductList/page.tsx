import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
