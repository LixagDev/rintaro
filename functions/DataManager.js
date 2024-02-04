"use server"
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export async function init(session){
    let userId;
    let devMode;

    const userSessionData = await prisma.user.findUnique({
        where:{
            name: session.user.name,
        },
        select:{
            id: true,
            devMode: true,
        }
    });

    userId = userSessionData.id;
    devMode = userSessionData.devMode;

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
    session.user.settings = {devMode: devMode};

    return session;
}

export async function GetUserData(username){
    return prisma.user.findUnique({
        where:{
            name: username,
        },
        select:{
            id: true,
            name: true,
            image: true,
            created_at: true,
        }
    });

    await prisma.$disconnect();
}

export async function GetUserStats(userId){
    const userSessionStats = await prisma.stat.findUnique({
        where:{
            userId: userId,
        },
        select:{
            imageConvert: true,
            youtubeDl: true,
        }
    });

    await prisma.$disconnect();

    return userSessionStats;
}

export async function UpdateImageConvertStat(session){
    const userSessionStats = await GetUserStats(session.user.id);

    const update = await prisma.stat.update({
        where:{
            userId: session.user.id,
        },
        data:{
            imageConvert: userSessionStats.imageConvert + 1,
        }
    });
}

export async function UpdateYoutubeDlStat(session){
    const userSessionStats = await GetUserStats(session.user.id);

    const update = await prisma.stat.update({
        where:{
            userId: session.user.id,
        },
        data:{
            youtubeDl: userSessionStats.youtubeDl + 1,
        }
    });

    await prisma.$disconnect();
}

export async function SaveSettings({session, devMode}){
    return prisma.user.update({
        where: {
            id: session.user.id,
        },
        data:{
            devMode: devMode,
        }
    });

    await prisma.$disconnect();
}

export async function EditProfile({session, image}){
    return prisma.user.update({
        where: {
            id: session.user.id,
        },
        data:{
            image: image,
        }
    });

    await prisma.$disconnect();
}