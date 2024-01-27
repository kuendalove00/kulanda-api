import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { BrandModule } from './brand/brand.module';
import { ModelModule } from './model/model.module';
import { CustomizationModule } from './customization/customization.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [UserModule, ProductModule, StoreModule, CategoryModule, SubcategoryModule, BrandModule, ModelModule, CustomizationModule, OwnerModule],
  providers: [PrismaService],
})
export class AppModule {}
