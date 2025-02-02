import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

userSchema.virtual('addressDetails', {
    ref: 'addresses',
    localField: '_id',
    foreignField: 'userId',
    justOne: true,
})

userSchema.virtual('products', {
    ref: 'products',
    localField: '_id',
    foreignField: 'userId',
    justOne: false,
})

const UserModel = mongoose.model('users', userSchema)
export default UserModel
