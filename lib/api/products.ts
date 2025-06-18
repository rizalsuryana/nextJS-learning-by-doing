import {get, post, put, del} from './api';


export type Product = {
    id? : number;
    name: string;
    price: number;
};

export const getProducts = () => get<Product[]>('products');
export const getProduct = (id: string) => get<Product>(`products/${id}`);
export const createProduct = (data: Product) => post('products', data);
export const updateProduct = (id: string, data: Product) => put(`products/${id}`, data);
export const deleteProduct = (id: string) => del(`products/${id}`);