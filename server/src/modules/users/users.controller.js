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

/* import DTOs. */
import { CreateUserDto } from './dto/create-user.dto'

/* import services */
import { ListService } from './list.service'
import { ViewService } from './view.service'
import { CreateService } from './create.service'
import { GetUserAddressService } from './get-user-address.service'

/* import decorators */
import { ValidateRequestGuard } from '../../guards/validate-request.guard'
import { ValidateRequest } from '../../decorators/validate-request.decorators'

/**
 * controller for handling user-related requests
 */
@Controller('users')
@Dependencies()
export class UsersController {
    constructor() {
        this.viewService = new ViewService()
        this.listService = new ListService()
        this.createService = new CreateService()
        this.getUserAddressService = new GetUserAddressService()
    }

    @Post()
    @ValidateRequest(CreateUserDto)
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

    @Get(':id')
    @Bind(Req(), Res())
    async viewUser(request, response) {
        const result = await this.viewService.get(request)
        return response.json(result)
    }

    // @Get(':id')
    // @Bind(Req(), Res())
    // async getUsersInformation(request, response) {
    //     const result = await this.listService.get(request)
    //     return response.json(result)
    // }

    @Get(':id/address')
    @Bind(Req(), Res())
    async getUserAddress(request, response) {
        const result = await this.getUserAddressService.get(request)
        return response.json(result)
    }
}
