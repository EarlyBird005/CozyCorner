import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    foodItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodItems"
        }
    ]
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);