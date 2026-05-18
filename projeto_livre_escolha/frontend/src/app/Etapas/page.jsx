import React from 'react';
// Importando ícones simples da biblioteca Lucide (comum em projetos Next.js)
// Se não tiver instalado, rode: npm install lucide-react
import { Map, Eye, Route, Plane } from 'lucide-react';

export default function Etapas() {
  const etapas = [
    {
      titulo: 'Mapa Interior',
      descricao: 'Descubra mais sobre você',
      status: 'Não iniciado',
      icon: <Map className="w-6 h-6 text-blue-600" />,
    },
    {
      titulo: 'Horizonte Ampliado',
      descricao: 'Explore possibilidades de carreira',
      status: 'Não iniciado',
      icon: <Eye className="w-6 h-6 text-blue-600" />,
    },
    {
      titulo: 'Rota Definida',
      descricao: 'Identifique caminhos ideais',
      status: 'Não iniciado',
      icon: <Route className="w-6 h-6 text-blue-600" />,
    },
    {
      titulo: 'Plano de Voo',
      descricao: 'Planeje seus próximos passos',
      status: 'Não iniciado',
      icon: <Plane className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#f0f4f9] flex flex-col items-center py-16 px-4">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0a1a2f] mb-2">Sua jornada</h1>
        <p className="text-gray-600 text-lg">Acompanhe as etapas do seu desenvolvimento</p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {etapas.map((etapa, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-xl">
                {etapa.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{etapa.titulo}</h3>
                <p className="text-gray-500">{etapa.descricao}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full">
                {etapa.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-12 flex gap-2 text-blue-600 font-medium">
        <a href="#" className="hover:underline">Ver Dashboard</a>
        <span>•</span>
        <a href="#" className="hover:underline">Ver Progresso</a>
      </div>
    </main>
  );
}