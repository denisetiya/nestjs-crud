import { Body, Controller, Delete, Get, Header, NotFoundException, Param, Post, Put } from '@nestjs/common';

const products = [
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

@Controller('product')
export class ProductController {
  @Get()
  @Header('Content-Type', 'application/json')
  getProduct(): { name: string; price: number; description: string }[] {
    return products.map(({ id, ...productWithoutId }) => productWithoutId);
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getProductById(@Param('id') id: string): { name: string; price: number; description: string } {
    const productId = parseInt(id);

    const selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const { id: _, ...productWithoutId } = selectedProduct;
    return productWithoutId;
  }

  @Post('add')
  @Header('Content-Type', 'application/json')
  addProduct(@Body() product: { name: string; price: number; description: string }){
    const newId = products.length; 
    const newProduct = { id: newId, ...product };
    products.push(newProduct); 
    return {
        'message': `Product ${newProduct.name} added successfully`,
    }
  }

  @Delete('delete/:id') 
  @Header('Content-Type', 'application/json')
  deleteProduct(@Param('id') id: string) {
    const productId = parseInt(id);

    const findProduct = products.find(p => p.id === productId);
    if (!findProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    products.splice(products.indexOf(findProduct), 1);
    
    return {
      message: `Product with ID ${id} deleted successfully`,
    };
  }

  @Put('update/:id')
  @Header('Content-Type', 'application/json')
  updateProduct(@Param('id') id: string, @Body() product: { name: string; price: number; description: string }) {
    const productId = parseInt(id);

    const findProduct = products.find(p => p.id === productId);
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
