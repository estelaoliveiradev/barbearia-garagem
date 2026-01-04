
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';

const AIStyleAdvisor: React.FC = () => {
  const [vibe, setVibe] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vibe.trim()) return;

    setLoading(true);
    const result = await getStyleAdvice(vibe);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section id="ia" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-600/20 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              BARBER IA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Descubra seu Próximo Estilo
            </h2>
            <p className="text-slate-400 text-lg">
              Nosso consultor de visagismo alimentado por Inteligência Artificial ajuda você a encontrar o corte ideal para sua personalidade.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
            {!advice ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 font-medium mb-3">
                    Descreva seu estilo ou a "vibe" que procura (ex: Executivo moderno, Rocker rebelde, Atleta prático...)
                  </label>
                  <textarea
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value)}
                    placeholder="Minha vibe é..."
                    className="w-full h-32 bg-slate-800 border border-slate-700 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-600 outline-none resize-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !vibe.trim()}
                  className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Analisando seu perfil...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Obter Consultoria de Estilo
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex items-start gap-4 p-6 bg-slate-800/80 rounded-2xl border border-yellow-600/30">
                  <div className="bg-yellow-600 p-2 rounded-xl">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-yellow-500 font-bold mb-2">Sugestões do Especialista IA:</h4>
                    <div className="text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {advice}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { setAdvice(null); setVibe(''); }}
                  className="text-yellow-600 font-bold hover:text-yellow-500 transition-colors"
                >
                  ← Tentar outro estilo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStyleAdvisor;
