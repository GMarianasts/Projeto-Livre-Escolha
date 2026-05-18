import Link from 'next/link';

export default function PaginaPrincipal() {
  return (<>
    <main className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f9] p-6 text-center">
      <div className="max-w-3xl flex flex-col items-center">
        
        {/* Título Principal */}
        <h1 className="text-[48px] md:text-[56px] font-bold text-[#0a1a2f] leading-tight mb-6">
          Bem-vindo ao Próximo <br /> Destino
        </h1>

        <p className="text-[#4b5563] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
          Estamos aqui para ajudá-lo a descobrir seu potencial e encontrar o caminho 
          ideal para sua carreira. Através de uma jornada guiada, você conhecerá 
          melhor suas habilidades, explorará possibilidades e traçará um plano 
          concreto para seu futuro profissional.
        </p>

        {/* Botão com Link */}
        <Link 
          href="/Etapas" 
          className="inline-flex items-center gap-2 bg-[#05050b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black transition-all group"
        >
          Começar jornada
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

      </div>
    </main>
 </> );
}