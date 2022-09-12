import * as handlers from './src';
import { InMemoryProductService } from './src/services/in-memory-product-service';

console.log(process.env);

const productService = new InMemoryProductService()

export const getProductsById = handlers.getProductsByIdHandler(productService);
export const getProductsList = handlers.getProductsListHandler(productService);
export const createProduct = handlers.createProductHandler(productService);
