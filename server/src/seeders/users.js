import UserModel from '../models/user.model.js'

export const seedUsers = async () => {
    try {
        const users = [
            {
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+9232382233232',
            },
            {
                name: 'Jane Smith',
                email: 'jane@example.com',
                phone: '+9232389092364',
            },
        ]

        await UserModel.deleteMany()
        const createdUsers = await UserModel.insertMany(users)

        // eslint-disable-next-line no-console
        console.log('Users Seeded Successfully:', createdUsers)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error seeding users:', error)
    }
}
