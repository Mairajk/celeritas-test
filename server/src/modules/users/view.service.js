import { Injectable } from '@nestjs/common'

import UserModel from '../../models/user.model'

@Injectable()
export class ViewService {
    async get(request) {
        const {
            param: { id },
        } = request

        const data = await UserModel.findById(id)
            .populate('addressDetails')
            .populate('products')
            .lean()

        return { data }
    }
}
