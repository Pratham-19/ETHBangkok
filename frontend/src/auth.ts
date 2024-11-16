import NextAuth from "next-auth";
import { authOptions } from "./utlis/auth";

console.log(authOptions);

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
