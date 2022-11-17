import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Stack from 'react-bootstrap/Stack';

export default function CartWidget() {
  return (
    <Stack direction="horizontal" gap={1}>
      <div>
        <FaShoppingCart />
      </div>
      <p className="m-0">4</p>
    </Stack>
  );
}
