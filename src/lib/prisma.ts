import { PrismaClient } from "@prisma/client";

import { env } from "./env";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (env.isDev) globalThis.prisma = prisma;
