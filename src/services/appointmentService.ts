import prismaClient from "../../prisma/config";

type UnavailableHour = {
  startHour: string;
  endHour: string;
};


export const findAvailableSlots = async (date: string, config: any) => {
  const appointments = await prismaClient.appointmentBooking.findMany({
    where: { date },
  });

  const slots = [];
  let currentHour = config.startHour;
  let currentMinute = 0;

  while (currentHour < config.endHour || (currentHour === config.endHour && currentMinute < 60)) {
    const time = `${currentHour}:${currentMinute === 0 ? '00' : currentMinute}`;
    const isBooked = appointments.some((app) => app.time === time);
    const isUnavailable = isTimeUnavailable(time, config.unavailableHours);
    
    if (!isUnavailable) {
      slots.push({ time, available_slots: isBooked ? 0 : 1 });
    }

    currentMinute += config.slotDuration;
    if (currentMinute >= 60) {
      currentMinute -= 60;
      currentHour++;
    }
  }

  return slots;
};

const isTimeUnavailable = (time: string, unavailableHours: UnavailableHour[]) => {
  const [hour, minute] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minute;

  return unavailableHours?.some(({ startHour, endHour }) => {
    const [startHourNum, startMinuteNum] = startHour.split(':').map(Number);
    const [endHourNum, endMinuteNum] = endHour.split(':').map(Number);
    const startTimeInMinutes = startHourNum * 60 + startMinuteNum;
    const endTimeInMinutes = endHourNum * 60 + endMinuteNum;

    return timeInMinutes >= startTimeInMinutes && timeInMinutes < endTimeInMinutes;
  });
};

export const bookAppointment = async (date: string, time: string) => {
    const appointment = await prismaClient.appointmentBooking.create({
      data: { date, time },
    });
    return appointment;
  };
  
  export const cancelAppointment = async (id: number) => {
    await prismaClient.appointmentBooking.delete({ where: { id } });
  };