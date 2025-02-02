import { Module } from '@nestjs/common'

/* import controller */
import { UsersController } from './users.controller'

/* import services */
import { ListService } from './list.service'
import { ViewService } from './view.service'
import { CreateService } from './create.service'
import { GetUserAddressService } from './get-user-address.service'

@Module({
    controllers: [UsersController],
    providers: [ListService, ViewService, CreateService, GetUserAddressService],
})
export class UsersModule {}
