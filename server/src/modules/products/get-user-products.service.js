import { Injectable } from '@nestjs/common'

import ProductModel from '../../models/product.model'

@Injectable()
export class GetUserProductsService {
    async get(request) {
        const {
            params: { userId },
        } = request

        const data = await ProductModel.find({
            userId,
        })

        return { data }
    }
}
