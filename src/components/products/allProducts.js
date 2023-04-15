import React, { useEffect, useState } from 'react';
import {
  Flex,
} from "@chakra-ui/react";
import swell from "@/utils/swell";

import {Product}  from '@/components/products/displayProducts';

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
    <Flex flexWrap="wrap" justifyContent="center">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Flex>
  );
}