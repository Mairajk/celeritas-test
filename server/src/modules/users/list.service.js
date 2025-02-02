import { Injectable } from '@nestjs/common'

import UserModel from '../../models/user.model'

@Injectable()
export class ListService {
    async get() {
        const data = await UserModel.find().populate('addressDetails')

        return { data }
    }
}
