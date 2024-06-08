import prismaClient from "../../prisma/config";

export const getSlotConfig = async () => {
    return prismaClient.slotConfig.findFirst();
  };