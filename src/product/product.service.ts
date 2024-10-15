import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 0,
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
    },
    {
      id: 1,
      name: 'Product 2',
      price: 200,
      description: 'Product 2 description',
    },
    {
      id: 2,
      name: 'Product 3',
      price: 300,
      description: 'Product 3 description',
    },
  ];

  getAllProducts() {
    return this.products.map(({ id, ...productWithoutId }) => productWithoutId);
  }

  getProductById(id: number) {
    const selectedProduct = this.products.find(p => p.id === id);
    if (!selectedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const { id: _, ...productWithoutId } = selectedProduct;
    return productWithoutId;
  }

  addProduct(product: { name: string; price: number; description: string }) {
    const newId = this.products.length; 
    const newProduct = { id: newId, ...product };
    this.products.push(newProduct);
    return {
      message: `Product ${newProduct.name} added successfully`,
    };
  }

  deleteProduct(id: number) {
    const findProduct = this.products.find(p => p.id === id);
    if (!findProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(this.products.indexOf(findProduct), 1);
    return {
      message: `Product with ID ${id} deleted successfully`,
    };
  }

  updateProduct(id: number, product: { name: string; price: number; description: string }) {
    const findProduct = this.products.find(p => p.id === id);
    if (!findProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    findProduct.name = product.name;
    findProduct.price = product.price;
    findProduct.description = product.description;

    return {
      message: `Product with ID ${id} updated successfully`,
    };
  }
}
