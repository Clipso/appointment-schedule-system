import prismaClient from "../../prisma/config";

export const isHoliday = async (date: string) => {
    const holiday = await prismaClient.holidayConfig.findUnique({
        where: { date },
    });
    return !!holiday;
  };