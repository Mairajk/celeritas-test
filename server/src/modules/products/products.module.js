import { Module } from '@nestjs/common'

/* import controller */
import { ProductsController } from './products.controller'

/* import services */
import { ListService } from './list.service'
import { CreateService } from './create.service'
import { GetUserProductsService } from './get-user-products.service'

@Module({
    controllers: [ProductsController],
    providers: [CreateService, ListService, GetUserProductsService],
})
export class ProductsModule {}
