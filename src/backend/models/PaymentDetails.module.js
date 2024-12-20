import mongoose from "mongoose";

const PaymentDetailsSchema = new mongoose.Schema({
    
}, { timestamps: true });

export const PaymentDetails = mongoose.model("PaymentDetails", PaymentDetailsSchema);