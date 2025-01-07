import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: { type: String, required: true},
    description: String,
    imagaURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})