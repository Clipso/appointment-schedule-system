interface UnavailableHours {
    startHour: string;
    endHour: string;
  }
  
  interface SlotConfig {
    slotDuration: number;
    maxSlots: number;
    startHour: number;
    endHour: number;
    unavailableHours: UnavailableHours[];
  }