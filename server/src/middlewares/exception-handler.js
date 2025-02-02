import { Catch } from '@nestjs/common'

import translate from '../helpers/translate'

/**
 * Exception filter to handle all exceptions in the application.
 */
@Catch()
export class AllExceptionsFilter {
    /**
     * Method to handle exceptions.
     * @param {Error} exception - The caught exception.
     * @param {ArgumentsHost} host - The arguments host object.
     */
    catch(error, host) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()

        // eslint-disable-next-line
        console.log(error)
        switch (error.name) {
            case 'HttpException':
                response.status(422).json(error.response)

                break

            case 'AppValidationError':
                response.status(error.code).json({
                    message: error.message,
                })

                break

            case 'AppValidationErrorWithData': {
                response.status(error.code).json({
                    message: error.message,
                    data: error.data,
                })

                break
            }
            case 'UnauthorizedException': {
                response.status(401).json({
                    message: error.message,
                })

                break
            }
            case 'ForbiddenException': {
                response.status(403).json({
                    message: error.message,
                })

                break
            }

            default:
                response.status(500).json({
                    message: translate('errors', 'default'),
                })
        }
    }
}

export const withErrorHandler = (controllerMethod) => {
    return async (request, response, next) => {
        try {
            /* call the original controller method */
            await controllerMethod(request, response)
        } catch (error) {
            const err = error?.response ? error.response : error
            /* forward the error to the error handling middleware */
            return next(err)
        }
    }
}
