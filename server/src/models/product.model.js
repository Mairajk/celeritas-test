import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        productName: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true }
)

const ProductModel = mongoose.model('products', productSchema)
export default ProductModel
