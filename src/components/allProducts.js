import React, { useEffect, useState } from 'react';
import swell from "@/utils/swell";

export function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = null;
        while (!response) {
          response = await swell.get('/products', {
            where: { active: true },
            limit: 25,
            page: 1,
          });
          console.log(response)
          if (response === null) {
            // If response is null, wait for and try again
            await new Promise(resolve => setTimeout(resolve, 10));
          }
        }
        setProducts(response.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products:</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.images[0].file.url} alt={product.name} />
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
