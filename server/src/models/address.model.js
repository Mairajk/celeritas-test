import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        addressDetails: { type: String, required: true },
    },
    { timestamps: true }
)

const AddressModel = mongoose.model('addresses', addressSchema)
export default AddressModel
