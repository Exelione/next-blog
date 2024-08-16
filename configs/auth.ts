import { users } from "@/data/users";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authConfig: AuthOptions = {
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    Credentials({
        credentials: {
            email: {
                label: "email",
                type: "email",
                required: true,
                placeholder: "example@gmail.com",
            },
            password: {
                label: "password",
                type: "password",
                required: true,
                placeholder: "password",
            }
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) return null
            const currentUser = users.find(user => user.email === credentials.email)
            if (currentUser && currentUser.password === credentials.password) {
                const { password, ...userWithoutPass } = currentUser
                return userWithoutPass as User

            }
            return null
        }
    })
    ],
    pages: {
        signIn: "/signin"
    }
}