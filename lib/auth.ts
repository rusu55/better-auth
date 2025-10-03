import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../prisma/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  secret: process.env.BETTER_AUTH_SECRET!,
  siteUrl: process.env.BETTER_AUTH_URL!,
  emailAndPassword:{
    enabled:true,
  },
 plugins: [nextCookies()]
});