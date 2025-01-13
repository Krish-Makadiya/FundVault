import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import { connectDb } from "@/database/connectDB";

export const authOptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "google") {
                await connectDb();

                const currUser = await User.findOne({ email: user.email });

                if (!currUser) {
                    const newUser = await User.create({
                        username: user.email.split("@")[0],
                        email: user.email,
                        name: user.name,
                        description: `Hello Guys! I am ${user.name}`,
                        razorpayId: "",
                        razorpaySecret: "",
                    });
                    user.username = newUser.username;
                } else {
                    user.username = currUser.username;
                }
            }
            if (account.provider == "github") {
                await connectDb();

                const currUser = await User.findOne({ email: user.email });

                if (!currUser) {
                    const newUser = await User.create({
                        username: user.email.split("@")[0],
                        email: user.email,
                        name: user.name,
                        description: `Hello Guys! I am ${user.name}`,
                        razorpayId: "",
                        razorpaySecret: "",
                    });
                    user.username = newUser.username;
                } else {
                    user.username = currUser.username;
                }
            }
            return true;
        },
        async session({ session, user, token }) {
            const currUser = await User.findOne({ email: session.user.email });
            session.user.username = currUser.username;
            session.user.name = currUser.name;
            session.user.description = currUser.description;
            session.user.email = currUser.email;

            return session;
        },
    },
});

export { authOptions as GET, authOptions as POST };
