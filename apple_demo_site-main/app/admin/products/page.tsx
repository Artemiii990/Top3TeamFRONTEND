'use client';

import { useState } from 'react';
import { products as initialProducts } from '@/mock/products';
import ProductsTable from '@/components/admin/ProductsTable';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const openCreate = () => {
    setEditing(null);
    setName('');
    setPrice('');
    setOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setName(product.name);
    setPrice(String(product.price));
    setOpen(true);
  };

  const saveProduct = () => {
    if (!name || !price) return;

    if (editing) {
      setProducts(prev =>
        prev.map(p =>
          p.id === editing.id
            ? { ...p, name, price: Number(price) }
            : p
        )
      );
    } else {
      setProducts(prev => [
        ...prev,
        {
          id: Date.now(),
          name,
          category: 'Phones',
          price: Number(price),
          status: 'Active',
        },
      ]);
    }

    setOpen(false);
    setEditing(null);
    setName('');
    setPrice('');
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <h1>Products</h1>

        <Button onClick={openCreate}>
          + Add Product
        </Button>
      </div>

      {/* TABLE */}
      <ProductsTable
        products={products}
        onEdit={openEdit}
        onDelete={deleteProduct}
      />

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 style={{ marginBottom: 16 }}>
          {editing ? 'Edit Product' : 'New Product'}
        </h2>

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

          <Button onClick={saveProduct}>
            {editing ? 'Update' : 'Create'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}