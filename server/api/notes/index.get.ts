import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const data = await prisma.note.findMany();
  return data;
});
