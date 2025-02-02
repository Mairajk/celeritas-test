import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { seedUsers } from './users.js'
import { seedProducts } from './products.js'
import { seedAddresses } from './addresses.js'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

const seedDatabase = async () => {
    // eslint-disable-next-line no-console
    console.log(` 
        ---------------- Seeding Is In Progress ----------------`)

    try {
        await mongoose.connect(MONGO_URI, {})
        // eslint-disable-next-line no-console
        console.log('Connected to MongoDB')

        await seedUsers()
        await seedProducts()
        await seedAddresses()

        // eslint-disable-next-line no-console
        console.log('Database Seeding Complete!')
        mongoose.connection.close()
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Seeding failed:', error)
        mongoose.connection.close()
    }
}

seedDatabase()
