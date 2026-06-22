'use client';

import { useState } from 'react';
import { products as initial } from '@/mock/products';
import ProductsTable from '@/components/admin/ProductsTable';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

export default function ProductsPage() {
  const [products, setProducts] = useState(initial);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name,
        category: 'Phones',
        price: Number(price),
        status: 'Active',
      },
    ]);

    setOpen(false);
    setName('');
    setPrice('');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 32,
        }}
      >
        <h1>Products</h1>

        <Button onClick={() => setOpen(true)}>
          + Add Product
        </Button>
      </div>

      <ProductsTable products={products} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>New Product</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button onClick={addProduct}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}