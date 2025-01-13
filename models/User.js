import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        razorpayId: {
            type: String,
        },
        razorpaySecret: {
            type: String,
        },
        cover_pic: {
            type: String,
        },
        profile_pic: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || model("User", UserSchema);
