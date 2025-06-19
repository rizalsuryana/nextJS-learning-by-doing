import ProductForm from '@/components/products/ProductForm';
import { getProduct, updateProduct } from '@/lib/api/products';
import { redirect } from 'next/navigation';

export default async function EditProductPage({params} : {params: {id: string}}) {
    const product = await getProduct(params.id);

    const handleUpdate = async (data: any) => {
        'use server';
        await updateProduct(params.id, data);
        redirect('/products');
    }
  return (
    <div>
        <ProductForm initial={product} onSubmit={handleUpdate}/>
    </div>
  );
}