import bodyParser from 'body-parser'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import connectDB from './config/database'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })
    app.setGlobalPrefix('api')

    /** Build mongoDB connection. */
    await connectDB()

    /**
     * parse the form data from body using body parser
     */
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )

    await app.listen(process.env.PORT || 3000)
}
bootstrap()
