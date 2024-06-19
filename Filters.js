import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div>
      <TextField label="Category" name="category" onChange={handleChange} />
      <TextField label="Company" name="company" onChange={handleChange} />
      <TextField label="Rating" name="rating" type="number" onChange={handleChange} />
      <TextField label="Price Range" name="priceRange" onChange={handleChange} />
      <FormControlLabel
        control={<Checkbox name="availability" onChange={handleChange} />}
        label="Availability"
      />
    </div>
  );
};

export default Filters;