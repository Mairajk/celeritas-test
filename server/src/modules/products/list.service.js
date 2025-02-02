import { Injectable } from '@nestjs/common'

import ProductModel from '../../models/product.model'

@Injectable()
export class ListService {
    async get() {
        const data = await ProductModel.find()

        return { data }
    }
}
