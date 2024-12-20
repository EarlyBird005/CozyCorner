import mongoose from "mongoose";

const addressesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    floorNumber: {
        type: String
    },
    address: {
        type: String,
        required: [true, "Address is required."]
    },
    pinCode: {
        type: String
    },
    nearLandScape: {
        type: String
    },
    district: {
        type: String
    }
}, { timestamps: true });

export const Addresses = mongoose.model("Addresses", addressesSchema);