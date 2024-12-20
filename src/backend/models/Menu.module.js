import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    categories: {
        type :mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

export const Menu = mongoose.model("Menu", menuSchema);