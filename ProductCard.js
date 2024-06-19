import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.uniqueId}`}>
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
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;