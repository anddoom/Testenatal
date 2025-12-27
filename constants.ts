
import { UserData } from './types';

export const USER_CONFIG: Record<string, UserData> = {
  'Neide': {
    id: 'neide',
    name: 'Neide',
    imageUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1ad?auto=format&fit=crop&q=80&w=1200',
    message: 'Feliz Natal, Neide! Um momento especial para você.'
  },
  'Monica': {
    id: 'monica',
    name: 'Monica',
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=1200',
    message: 'Feliz Natal, Monica! Aproveite a magia desta época.'
  },
  'Daniela': {
    id: 'daniela',
    name: 'Daniela',
    imageUrl: 'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&q=80&w=1200',
    message: 'Feliz Natal, Daniela! Que seu dia seja iluminado.'
  },
  'Mae': {
    id: 'mae',
    name: 'Mãe',
    imageUrl: 'https://images.unsplash.com/photo-1511270339309-7d5097e21117?auto=format&fit=crop&q=80&w=1200',
    message: 'Feliz Natal, Mãe! Com todo amor do mundo.'
  }
};

export const VALID_CODES: string[] = Object.keys(USER_CONFIG);
