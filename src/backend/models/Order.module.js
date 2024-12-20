import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    foodItem: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodItems"
        }
    ],
    deliveredTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addresses"
    },
    status: {
        type: String,
        enum: ["making the order", "out for delivery", "delivered", "cancelled"] 
    },
    orderedAt: {
        type: Date,
        default: Date.now 
    },
    paymentDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PaymentDetails"
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);