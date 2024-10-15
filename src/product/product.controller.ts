import { Body, Controller, Delete, Get, Header, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getProduct() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getProductById(@Param('id') id: string) {
    const productId = parseInt(id);
    return this.productService.getProductById(productId);
  }

  @Post('add')
  @Header('Content-Type', 'application/json')
  addProduct(@Body() product: { name: string; price: number; description: string }) {
    return this.productService.addProduct(product);
  }

  @Delete('delete/:id') 
  @Header('Content-Type', 'application/json')
  deleteProduct(@Param('id') id: string) {
    const productId = parseInt(id);
    return this.productService.deleteProduct(productId);
  }

  @Put('update/:id')
  @Header('Content-Type', 'application/json')
  updateProduct(@Param('id') id: string, @Body() product: { name: string; price: number; description: string }) {
    const productId = parseInt(id);
    return this.productService.updateProduct(productId, product);
  }
}
