'use client';

import ProductsTable from '@/components/admin/ProductsTable';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';
import { useProducts } from '@/src/hooks/useProducts';

export default function ProductsPage() {
  const {
    products,
    search,
    setSearch,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const openCreate = () => {
    setEditing(null);
    setName('');
    setPrice('');
    setOpen(true);
  };

  const openEdit = (product: any) => {
    setEditing(product);
    setName(product.name);
    setPrice(String(product.price));
    setOpen(true);
  };

  const save = () => {
    if (editing) {
      updateProduct({
        ...editing,
        name,
        price: Number(price),
      });
    } else {
      addProduct({
        name,
        price: Number(price),
        category: 'Phones',
        status: 'Active',
      });
    }

    setOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Products</h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />

        <Button onClick={openCreate}>
          + Add Product
        </Button>
      </div>

      <ProductsTable
        products={products}
        onEdit={openEdit}
        onDelete={deleteProduct}
      />

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>{editing ? 'Edit' : 'Create'}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <Button onClick={save}>
          Save
        </Button>
      </Modal>
    </div>
  );
}