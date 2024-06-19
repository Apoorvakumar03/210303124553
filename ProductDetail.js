import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts, generateUniqueId } from '../api';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProducts();
      const foundProduct = data.find((prod) => generateUniqueId(prod) === id);
      setProduct(foundProduct);
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/200?random=${product.uniqueId}`}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.company}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Discount: {product.discount}%</Typography>
        <Typography variant="body2">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;