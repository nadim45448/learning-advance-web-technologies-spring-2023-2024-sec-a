
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Product } from 'src/entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("add")
  async create(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.create(productDto);
  }

  
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() productDto: ProductDto): Promise<Product> {
    return this.productService.update(id, productDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productService.delete(id);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }
}
