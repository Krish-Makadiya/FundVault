"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";
import { connectDb } from "@/database/connectDB";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb();

    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2",
        },
    });

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    };

    let x = await instance.orders.create(options);

    await Payment.create({
        oid: x.id,
        amount: amount,
        to_username: to_username,
        name: paymentform.name,
        message: paymentform.message,
    });

    return x;
};

export const fetchUser = async (username) => {
    await connectDb();
    let u = await User.findOne({ username: username });

    let user = await u.toObject({ flattenObjectIds: true });
    return user;
};

export const fetchPayments = async (username) => {
    await connectDb();
    console.log("USERNAME: ", username);

    let p = await Payment.find({ to_user: username }).lean();
    const payments = p.map((payment) => ({
        ...payment,
        _id: payment._id.toString(),
        createdAt: payment.createdAt?.toISOString(),
        updatedAt: payment.updatedAt?.toISOString(),
    }));

    return payments;
};

export const updateUser = async (data) => {
    await connectDb();
    console.log("PREVIOUS DATA: ", data);

    const updatedUser = await User.updateOne(
        { username: data.username },
        {
            $set: {
                // Fields to update
                name: data.name,
                email: data.email,
                description: data.description,
                razorpayId: data.razorpayId,
                razorpaySecret: data.razorpaySecret,
            },
        },
        { new: true }
    );

    console.log("UPDATED DATA: ", updatedUser);
    return updatedUser;
};

export const fetchUserFormData = async (username) => {
    await connectDb();
    console.log("USERNAME: ", username);

    const i = await User.findOne({ username: username });
    let userInfo = await i.toObject({ flattenObjectIds: true });
    return userInfo;
};

export const addPayment = async (username, formData) => {
    await connectDb();

    console.log("USERNAME: ", username, formData);

    const newPayment = await Payment.create({
        name: username,
        to_user: formData.username,
        message: formData.message,
        amount: formData.amount,
    });

    const paymentObject = newPayment.toObject();

        const { _id, createdAt, updatedAt, __v, ...plainPayment } = paymentObject;

        return plainPayment;
};
