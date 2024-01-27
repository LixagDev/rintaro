import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
let userId;
let userStats;

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callback:{
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true;
            if (isAllowedToSignIn) {
                userId = user.id;
                userStats = await prisma.stat.findUnique({
                    where:{
                        userId: userId
                    },
                    select:{
                        imageConvert: true,
                        youtubeDl: true,
                    }
                });
                if (!userStats){
                    const createStatTable = await prisma.stat.create({
                        data:{
                            userId: userId
                        }
                    }).then(async () => {
                        userStats = await prisma.stat.findUnique({
                            where:{
                                userId: sessionFinal.user.id
                            },
                            select:{
                                imageConvert: true,
                                youtubeDl: true,
                            }
                        });
                    });
                }
                await prisma.$disconnect();
                return true;
            } else {
                return false;
            }
        },
        async session({ session, user, token }) {
            session.user.id = userId;
            return session;
        },
    }
}

export default NextAuth(authOptions);