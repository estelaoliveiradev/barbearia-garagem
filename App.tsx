
import React, { useState } from 'react';
import { Star, MapPin, Phone, Instagram, Facebook, Mail, ArrowRight, Scissors } from 'lucide-react';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import AIStyleAdvisor from './components/AIStyleAdvisor';
import { SERVICES, BARBERS, FEATURES } from './constants';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000" 
            alt="Barbearia Clássica" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 border border-yellow-600 text-yellow-500 text-xs font-bold uppercase tracking-widest rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Tradição & Modernidade
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 font-serif tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Estilo <span className="text-yellow-600">Elevado</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Mais do que um corte, uma experiência. Onde cada detalhe é esculpido com precisão artesanal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-5 rounded-full font-black transition-all shadow-2xl shadow-yellow-600/20 transform hover:scale-105"
            >
              AGENDAR AGORA
            </button>
            <a 
              href="#servicos"
              className="w-full sm:w-auto px-10 py-5 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all"
            >
              VER SERVIÇOS
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Role para baixo</span>
          <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-6 p-4 bg-yellow-50 rounded-2xl group-hover:bg-yellow-100 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Menu Premium</span>
              <h2 className="text-4xl md:text-5xl font-black font-serif mt-2 mb-4">Serviços que Definem Personalidade</h2>
              <p className="text-slate-600 text-lg">Escolha o tratamento que melhor se adapta ao seu estilo.</p>
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Todos os Serviços <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div 
                key={s.id} 
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                   <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{s.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <span className="text-slate-900 font-black text-2xl">R$ {s.price}</span>
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">{s.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="equipe" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif mb-6">Mestres das Lâminas</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Conheça os profissionais que transformarão seu visual com excelência e precisão.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {BARBERS.map((b) => (
              <div key={b.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-square">
                  <img 
                    src={b.imageUrl} 
                    alt={b.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button 
                      onClick={() => setIsBookingOpen(true)}
                      className="bg-white text-slate-900 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                    >
                      Agendar com {b.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-center">{b.name}</h3>
                <p className="text-yellow-600 font-semibold text-sm mb-2 text-center">{b.specialty}</p>
                <div className="flex justify-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(b.rating) ? 'fill-yellow-500' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section (Imported Component) */}
      <AIStyleAdvisor />

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <h2 className="text-4xl font-black mb-4 font-serif">Pronto para a sua melhor versão?</h2>
            <p className="text-white/80 text-lg">Garanta seu horário em poucos cliques e evite filas.</p>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-yellow-700 hover:bg-slate-100 px-12 py-6 rounded-full font-black text-xl shadow-2xl transition-all transform hover:scale-105"
          >
            QUERO AGENDAR AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-950 text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold tracking-tighter font-serif">
                  BARBER<span className="text-yellow-600">STUDIO</span> PRO
                </span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Unimos a sofisticação da barbearia clássica com as técnicas mais modernas de visagismo. O seu santuário de cuidados masculinos.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-600 hover:text-yellow-600 transition-all">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Onde Estamos</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span>Av. Paulista, 1000 - Bela Vista, São Paulo/SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span>(11) 99999-8888</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span>contato@barberpro.com.br</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Horários</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="text-white font-medium">09:00 - 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-yellow-600 font-bold">Fechado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>&copy; 2024 BarberStudio Pro. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default App;
