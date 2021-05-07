import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    CustomerName: String,
    CustomerOrders: [String],
    CustomerPhone: String,
    CustomerEmail: String,
    StatusOrder: String,
    CustomerAddress: String,
    TotalPrice: String,
    Quntity: [Number],
    OrderImages: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Orders = mongoose.model('PostOrders', orderSchema);

export default Orders;