import { postUser } from "@/app/lib";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.G_ID as string,
      clientSecret: process.env.G_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: async ({ profile, account }) => {
      try {
        if (profile) {
          const res = await postUser(profile?.email as string, profile?.name as string);
          cookies().set("email", profile.email as string);
          cookies().set("name", profile.name as string);
          cookies().set("accessToken", res?.token);
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET as string,
};
