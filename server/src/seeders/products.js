import ProductModel from '../models/product.model.js'
import UserModel from '../models/user.model.js'

export const seedProducts = async () => {
    try {
        const users = await UserModel.find()

        if (!users.length) {
            // eslint-disable-next-line no-console
            console.error('No users found. Run user seeder first.')
            return
        }

        const products = [
            { productName: 'iPhone 14', price: 999, userId: users[0]._id },
            { productName: 'MacBook Pro', price: 1999, userId: users[1]._id },
        ]

        await ProductModel.deleteMany()

        const createdProducts = await ProductModel.insertMany(products)

        // eslint-disable-next-line no-console
        console.log('Products Seeded Successfully:', createdProducts)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error seeding products:', error)
    }
}
