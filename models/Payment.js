import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PaymentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        to_user: {
            type: String,
            required: true,
        },
        oid: {
            type: String,
            // required: true,
        },
        message: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Payment || model("Payment", PaymentSchema);
