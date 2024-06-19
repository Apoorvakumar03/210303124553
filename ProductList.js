import React, { useState, useEffect } from 'react';
import { fetchProducts, generateUniqueId } from '../api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { Grid } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', rating: 0, priceRange: '', availability: false });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(filters.category, filters.company);
      const processedData = data.map((product) => ({
        ...product,
        uniqueId: generateUniqueId(product),
      }));
      setProducts(processedData);
    };
    loadProducts();
  }, [filters]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.uniqueId}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;