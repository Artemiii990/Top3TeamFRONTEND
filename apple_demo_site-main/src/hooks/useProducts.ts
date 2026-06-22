'use client';

import { useState } from 'react';
import { products as initial } from '@/mock/products';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initial);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addProduct = (data: Omit<Product, 'id'>) => {
    setProducts(prev => [
      ...prev,
      { ...data, id: Date.now() },
    ]);
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return {
    products: filteredProducts,
    search,
    setSearch,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}