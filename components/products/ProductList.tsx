import Link from "next/link";
import { Product } from "@/lib/api/products";

export default function ProductList({products}: {products: Product[]}) {

  return (
    <ul>
        {
            products.map(product => (
                <li key={product.id}>
                    {product.name} - {product.price}
                    <Link href={`/products/${product.id}`}>Detail</Link>
                    <Link href={`/products/${product.id}/edit`}>Edit</Link>
                </li>
            ))
        }
    </ul>
  );
}