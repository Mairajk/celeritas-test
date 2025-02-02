import { Reflector } from '@nestjs/core'
import { Injectable, Dependencies } from '@nestjs/common'

/* import middlewares */
import validate from '../middlewares/validate-response'

/* import decorator */
import { ValidateRequest } from '../decorators/validate-request.decorators'

@Injectable()
@Dependencies(Reflector)
export class ValidateRequestGuard {
    constructor(reflector) {
        this.reflector = reflector
    }

    async canActivate(context) {
        const request = context?.switchToHttp()?.getRequest()

        /* get validation class on route */
        const validationClass = this.reflector?.get(
            ValidateRequest,
            context?.getHandler()
        )

        /* create an instance of that validation class */
        const instance = new validationClass(request?.body, request?.user)

        /* validate it */
        await validate(instance, request)

        return true
    }
}
