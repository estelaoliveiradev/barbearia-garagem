
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Scissors, User, Calendar, Phone } from 'lucide-react';
import { SERVICES, BARBERS } from '../constants';
import { BookingStep, Service, Barber } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<BookingStep>(BookingStep.SERVICE);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const nextStep = () => {
    if (step === BookingStep.SERVICE) setStep(BookingStep.BARBER);
    else if (step === BookingStep.BARBER) setStep(BookingStep.SCHEDULE);
    else if (step === BookingStep.SCHEDULE) setStep(BookingStep.CONTACT);
    else if (step === BookingStep.CONTACT) setStep(BookingStep.SUCCESS);
  };

  const prevStep = () => {
    if (step === BookingStep.BARBER) setStep(BookingStep.SERVICE);
    else if (step === BookingStep.SCHEDULE) setStep(BookingStep.BARBER);
    else if (step === BookingStep.CONTACT) setStep(BookingStep.SCHEDULE);
  };

  const isStepValid = () => {
    if (step === BookingStep.SERVICE) return !!selectedService;
    if (step === BookingStep.BARBER) return !!selectedBarber;
    if (step === BookingStep.SCHEDULE) return !!date && !!time;
    if (step === BookingStep.CONTACT) return customerName.length > 2 && customerPhone.length > 8;
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case BookingStep.SERVICE:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Scissors className="w-5 h-5 text-yellow-600" /> Escolha o Serviço</h3>
            <div className="grid grid-cols-1 gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s)}
                  className={`p-4 border rounded-xl text-left transition-all ${
                    selectedService?.id === s.id 
                    ? 'border-yellow-600 bg-yellow-50 ring-2 ring-yellow-200' 
                    : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{s.name}</span>
                    <span className="text-yellow-700 font-bold">R$ {s.price}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{s.description}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case BookingStep.BARBER:
        return (
          <div className="space-y-4">
             <h3 className="text-xl font-bold flex items-center gap-2"><User className="w-5 h-5 text-yellow-600" /> Escolha o Barbeiro</h3>
             <div className="grid grid-cols-1 gap-3">
               {BARBERS.map((b) => (
                 <button
                   key={b.id}
                   onClick={() => setSelectedBarber(b)}
                   className={`flex items-center gap-4 p-4 border rounded-xl text-left transition-all ${
                     selectedBarber?.id === b.id 
                     ? 'border-yellow-600 bg-yellow-50 ring-2 ring-yellow-200' 
                     : 'border-slate-200 hover:border-slate-300'
                   }`}
                 >
                   <img src={b.imageUrl} alt={b.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                     <div className="font-bold">{b.name}</div>
                     <div className="text-xs text-slate-500">{b.specialty}</div>
                   </div>
                 </button>
               ))}
             </div>
          </div>
        );

      case BookingStep.SCHEDULE:
        return (
          <div className="space-y-4">
             <h3 className="text-xl font-bold flex items-center gap-2"><Calendar className="w-5 h-5 text-yellow-600" /> Data e Horário</h3>
             <div className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Selecione o Dia</label>
                 <input 
                  type="date" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Horários Disponíveis</label>
                 <div className="grid grid-cols-3 gap-2">
                   {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(t => (
                     <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2 text-sm border rounded-lg transition-colors ${
                        time === t ? 'bg-yellow-600 text-white border-yellow-600' : 'hover:bg-slate-50 border-slate-200'
                      }`}
                     >
                       {t}
                     </button>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        );

      case BookingStep.CONTACT:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Phone className="w-5 h-5 text-yellow-600" /> Seus Dados</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Como devemos te chamar?"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm space-y-2">
                <div className="flex justify-between"><span>Serviço:</span> <span className="font-bold">{selectedService?.name}</span></div>
                <div className="flex justify-between"><span>Barbeiro:</span> <span className="font-bold">{selectedBarber?.name}</span></div>
                <div className="flex justify-between"><span>Data:</span> <span className="font-bold">{date} às {time}</span></div>
                <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-yellow-700">
                  <span>Total:</span> <span>R$ {selectedService?.price}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case BookingStep.SUCCESS:
        return (
          <div className="text-center py-8 space-y-4">
            <div className="inline-block p-4 bg-green-100 rounded-full text-green-600">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Agendamento Confirmado!</h3>
            <p className="text-slate-600 max-w-xs mx-auto">
              Tudo pronto, {customerName}! Enviamos um lembrete para seu WhatsApp. Nos vemos em {date} às {time}.
            </p>
            <button 
              onClick={onClose}
              className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800"
            >
              Fechar
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white rounded-3xl w-full max-w-lg relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {renderStep()}

          {step !== BookingStep.SUCCESS && (
            <div className="mt-8 flex justify-between items-center">
              <button
                disabled={step === BookingStep.SERVICE}
                onClick={prevStep}
                className={`flex items-center gap-2 font-bold ${step === BookingStep.SERVICE ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <ChevronLeft className="w-5 h-5" /> Voltar
              </button>
              
              <button
                disabled={!isStepValid()}
                onClick={nextStep}
                className={`flex items-center gap-2 bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-all ${
                  isStepValid() ? 'hover:bg-yellow-500 shadow-lg shadow-yellow-600/20' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                {step === BookingStep.CONTACT ? 'Finalizar' : 'Próximo'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
