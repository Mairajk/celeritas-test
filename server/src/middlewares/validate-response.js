import { union, keys, get } from 'lodash'
import { validate } from 'class-validator'
import { HttpException } from '@nestjs/common'

export default async (dtoInstance, request) => {
    const validDtoFields = keys(dtoInstance)

    const errorResponse = {
        message: 'Please fix the following errors.',
        errors: {},
    }

    const requestKeys = union(
        keys(request?.body),
        keys(request?.params),
        keys(request?.query)
    )

    requestKeys.forEach((key) => {
        if (
            !['page', 'limit', 'order', 'orderBy', 'attributes'].includes(key)
        ) {
            if (validDtoFields.includes(key)) {
                dtoInstance[key] =
                    get(request, `body.${key}`) ??
                    get(request, `params.${key}`) ??
                    get(request, `query.${key}`)
            }
        }
    })

    const errors = await validate(dtoInstance)
    if (errors?.length > 0) {
        for (const error of errors) {
            const constraints = Object.values(error?.constraints)
            errorResponse.errors[error?.property] = error?.constraints
                ?.isNotEmpty
                ? error?.constraints?.isNotEmpty
                : constraints[constraints.length - 1]
        }

        throw new HttpException(errorResponse, 422)
    }
}
