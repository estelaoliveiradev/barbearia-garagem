
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  icon: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
}

export enum BookingStep {
  SERVICE = 'SERVICE',
  BARBER = 'BARBER',
  SCHEDULE = 'SCHEDULE',
  CONTACT = 'CONTACT',
  SUCCESS = 'SUCCESS'
}
