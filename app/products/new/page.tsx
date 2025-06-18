import ProductForm from '@/components/ProductForm';
import { createProduct } from '@/lib/api/products';
import { redirect } from 'next/navigation';

export default function NewProduct() {
    const handleCreate = async (data: any) => {
        'use server';
        await createProduct(data);
        redirect('/products');
    }
  return (
    <ProductForm onSubmit={handleCreate}/>
  );
}