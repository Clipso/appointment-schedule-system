import express from 'express';

import { getAvailableSlots, createAppointment, deleteAppointment } from './controllers/appointmentController';

const router = express.Router();

router.get('/available-slots', getAvailableSlots);
router.post('/appointments', createAppointment);
router.delete('/appointments/:id', deleteAppointment);

export default router;