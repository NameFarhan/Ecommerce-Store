import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useWishContext } from '../WishContext/WishContext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes({ product }) {
  const { wishpro, handleAddWish, handleRemoveWish } = useWishContext();

  if (!product) {
    return null; // Return null or a fallback UI if product is undefined
  }

  const isWishListed = wishpro.some((wishItem) => wishItem.id === product.id);

  const handleWishToggle = () => {
    if (isWishListed) {
      handleRemoveWish(product.id);
    } else {
      handleAddWish(product);
    }
  };

  return (
    <Checkbox
      checked={isWishListed}
      onClick={handleWishToggle}
      {...label}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite sx={{ color: 'red' }} />}
    />
  );
}
