import prismaClient from "./config";

async function main() {
    await prismaClient.slotConfig.create({
      data: {
        slotDuration: 30,
        maxSlots: 1,
        startHour: 9,
        endHour: 18,
        unavailableHours: {
          create: [
            { startHour: '12:00', endHour: '13:00' }, // Lunch break
          ],
        },
      },
    });
  
    await prismaClient.holidayConfig.createMany({
      data: [
        { date: '2024-04-04' },
        { date: '2024-12-25' },
      ],
    });
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prismaClient.$disconnect();
    });