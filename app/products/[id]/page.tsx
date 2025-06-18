import { getProduct, deleteProduct } from "@/lib/api/products";
import { redirect } from "next/navigation";

export default async function ProductDetail({params}: { params: {id: string}}) {
    const product = await getProduct(params.id);
    async function handleDelete() {
        'use server';
        await deleteProduct(params.id);
        redirect('/products');
        
    }
  return (
    <div>
        <h1>
            {product.name}
            <p>${product.price}</p>
            <form action={handleDelete}>
                <button type="submit">Delete</button>
            </form>
        </h1>
    </div>
  );
}