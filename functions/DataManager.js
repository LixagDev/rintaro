"use server"
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export async function init(session){
    let userId;

    const userSessionData = await prisma.user.findUnique({
        where:{
            name: session.user.name,
        },
        select:{
            id: true,
        }
    });

    userId = userSessionData.id;

    const userSessionStats = await prisma.stat.findUnique({
        where:{
            userId: userId
        }
    });

    if (!userSessionStats){
        const createStatTable = await prisma.stat.create({
            data:{
                userId: userId
            }
        });
    }

    await prisma.$disconnect();

    session.user.id = userId;

    return session;
}

export async function UpdateImageConvertStat(session){
    const userSessionStats = await prisma.stat.findUnique({
        where:{
            userId: session.user.id,
        },
        select:{
            imageConvert: true,
        }
    });

    const update = await prisma.stat.update({
        where:{
            userId: session.user.id,
        },
        data:{
            imageConvert: userSessionStats.imageConvert + 1,
        }
    });

    await prisma.$disconnect();
}

//Faire update stats pour le download youtube