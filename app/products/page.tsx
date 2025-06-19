import { getProducts } from "@/lib/api/products";
import ProductList from "@/components/products/ProductList";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1>
        Products
      </h1>
      <Link href='/products/new'>Create New</Link>
      <ProductList products={products}/>
    </div>
  );
}