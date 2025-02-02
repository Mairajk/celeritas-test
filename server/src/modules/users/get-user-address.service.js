import { Injectable } from '@nestjs/common'

/* import models. */
import AddressModel from '../../models/address.model'

@Injectable()
export class GetUserAddressService {
    async get(request) {
        const {
            param: { id },
        } = request

        const data = await AddressModel.find({ userId: id })

        return { data }
    }
}
