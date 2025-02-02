import {
    Get,
    Post,
    Req,
    Res,
    Bind,
    UseGuards,
    Controller,
    Dependencies,
} from '@nestjs/common'

/* import services. */
import { ListService } from './list.service'
import { CreateService } from './create.service'
import { GetUserProductsService } from './get-user-products.service'

/* import decorators */
import { ValidateRequestGuard } from '../../guards/validate-request.guard'

/**
 * controller for handling user-related requests
 */
@Controller('products')
@Dependencies()
export class ProductsController {
    constructor() {
        this.listService = new ListService()
        this.createService = new CreateService()
        this.getUserProductsService = new GetUserProductsService()
    }

    @Post()
    @UseGuards(ValidateRequestGuard)
    @Bind(Req(), Res())
    async createUser(request, response) {
        const result = await this.createService.create(request)
        return response.json(result)
    }

    @Get()
    @Bind(Req(), Res())
    async getUsers(request, response) {
        const result = await this.listService.get(request)
        return response.json(result)
    }

    @Get('user/:userId')
    @Bind(Req(), Res())
    async getUserProducts(request, response) {
        const result = await this.getUserProductsService.get(request)
        return response.json(result)
    }
}
