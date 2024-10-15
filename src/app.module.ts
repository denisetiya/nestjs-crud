import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ProductModule, AuthModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
