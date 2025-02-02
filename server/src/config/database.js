import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables

const connectDB = async () => {
    // eslint-disable-next-line no-console
    console.log(
        ` 
   process.env.MONGO_URI >>>>>>>>>>>>>>>>>>>>>.............. `,
        process.env.MONGO_URI
    )

    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        // eslint-disable-next-line no-console
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('MongoDB Connection Error:', error.message)
        process.exit(1)
    }
}

export default connectDB
