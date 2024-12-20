import mongoose from "mongoose";

const FoodItemsSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: [true, "Food name is required."]
    },
    price: {
        type: Number,
        required: [true, "Food price is required."]
    },
    quantity: {
        type: Number,
        required: [true, "Food quantity is required."]
    },
    description: {
        type: String //,
        // required: [true, "Food description is required."]
    },
    foodImage: {
        type: String, // image url
        required: [true, "Food image is required."]
    }
}, { timestamps: true });

export const FoodItems = mongoose.model("FoodItems", FoodItemsSchema);