'use client';

import { useState } from "react";
import { Product } from "@/lib/api/products";
import { z } from 'zod';

const ProductSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    price: z.number().min(0, 'Price must ber greater than or equal to 0'),
});

type Props = {
    onSubmit: (data: Product) => void;
    initial?: Product;
}

export default function PoductForm({onSubmit, initial}: Props) {
    const [name, setName] = useState(initial?.name || '');
    const [price, setPrice] = useState(initial?.price || 0);
    const [error, setError] = useState<string | null>(null);
  return (
    <form
    onSubmit={
        e => {
            e.preventDefault();
            const result = ProductSchema.safeParse({name, price});
            if(!result.success) {
                setError(result.error.errors[0].message);
                return;
            }
            setError(null);
            onSubmit({name, price});
        }
    }
    >
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        />
        <input
        value={price}
        type="number"
        onChange={e => setPrice(+e.target.value)}
        placeholder="Price"
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Submit</button>
    </form>
  );
}