import { Request, Response } from 'express';
import { findAvailableSlots, bookAppointment, cancelAppointment } from '../services/appointmentService';
import { getSlotConfig } from '../services/slotConfigService';
import { isHoliday } from '../services/holidayService';

export const getAvailableSlots = async (req: Request, res: Response) => {
    const { date } = req.body;
    console.log(date);
    const config = await getSlotConfig();
    console.log(config);
    if (!config) {
      return res.status(404).json({ error: 'Slot configuration not found' });
    }
    if (await isHoliday(date)) {
      return res.status(400).json({ error: 'Selected date is a holiday' });
    }
    const slots = await findAvailableSlots(date, config);
    res.json(slots);
  };
  
  export const createAppointment = async (req: Request, res: Response) => {
    const { date, time } = req.body;
    const appointment = await bookAppointment(date, time);
    res.status(201).json(appointment);
  };
  
  export const deleteAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    await cancelAppointment(Number(id));
    res.status(204).send();
  };