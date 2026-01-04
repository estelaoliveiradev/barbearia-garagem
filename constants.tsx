
import React from 'react';
import { Scissors, Zap, Wind, UserCheck, Clock, ShieldCheck } from 'lucide-react';
import { Service, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Social',
    description: 'Corte clássico feito com máquina e tesoura, finalizado com produtos premium.',
    price: 60,
    duration: 45,
    icon: 'scissors'
  },
  {
    id: '2',
    name: 'Barba Terapia',
    description: 'Tratamento completo com toalha quente, óleos essenciais e hidratação.',
    price: 45,
    duration: 30,
    icon: 'zap'
  },
  {
    id: '3',
    name: 'Combo Master',
    description: 'Corte + Barba + Sobrancelha. O pacote definitivo de estilo.',
    price: 90,
    duration: 75,
    icon: 'wind'
  },
  {
    id: '4',
    name: 'Pezinho & Acabamento',
    description: 'Manutenção rápida dos contornos para manter o visual em dia.',
    price: 25,
    duration: 15,
    icon: 'user'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Ricardo "Mão de Ouro"',
    specialty: 'Cortes Clássicos e Fade',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'b2',
    name: 'Gustavo Lima',
    specialty: 'Especialista em Barba e Visagismo',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'b3',
    name: 'Thiago Black',
    specialty: 'Estilos Modernos e Freestyle',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const FEATURES = [
  {
    title: 'Ambiente Premium',
    desc: 'Espaço climatizado com Wi-Fi, cerveja artesanal e café.',
    icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />
  },
  {
    title: 'Profissionais de Elite',
    desc: 'Nossa equipe passa por treinamentos constantes em visagismo.',
    icon: <UserCheck className="w-8 h-8 text-yellow-600" />
  },
  {
    title: 'Horário Flexível',
    desc: 'Atendimento estendido até às 21h para sua conveniência.',
    icon: <Clock className="w-8 h-8 text-yellow-600" />
  }
];
