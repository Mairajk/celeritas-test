import AddressModel from '../models/address.model.js'
import UserModel from '../models/user.model.js'

export const seedAddresses = async () => {
    try {
        const users = await UserModel.find()
        if (!users.length) {
            // eslint-disable-next-line no-console
            console.error('No users found. Run user seeder first.')
            return
        }

        const addresses = [
            {
                userId: users[0]._id,
                addressDetails: '123 Main St, New York',
            },
            {
                userId: users[1]._id,
                addressDetails: '456 Park Ave, Los Angeles',
            },
        ]

        await AddressModel.deleteMany()

        const createdAddresses = await AddressModel.insertMany(addresses)

        // eslint-disable-next-line no-console
        console.log('Addresses Seeded Successfully:', createdAddresses)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error seeding addresses:', error)
    }
}
