import { PrismaClient } from "@/app/generated/prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

const url = process.env.DATABASE_URL

if (!url) {
    throw new Error("Missing DATABASE_URL");
}

const adapter = new PrismaMariaDb(url);
const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;