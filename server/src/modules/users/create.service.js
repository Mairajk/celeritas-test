import UserModel from '../../models/user.model'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateService {
    async create(request) {
        const { body } = request

        await UserModel.create(body)

        /** return success message */
        return {
            message: 'User created successfully.',
        }
    }
}
