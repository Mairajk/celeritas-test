import dotenv from 'dotenv'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'

import { AllExceptionsFilter } from './middlewares/exception-handler'
import modules from './modules/index'

dotenv.config()

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.CLIENT_SECRET,
        }),
        ...modules,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
})
export class AppModule {}
