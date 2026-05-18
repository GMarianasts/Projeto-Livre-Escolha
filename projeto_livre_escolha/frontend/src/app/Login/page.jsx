import React from 'react';

export default function LoginPage() {
  return (<>
    <main className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f9] p-4">
      <div className="bg-white p-10 rounded-2xl shadow-sm w-full max-w-[480px] flex flex-col items-center">
        
        {/* Header */}
        <h1 className="text-[32px] font-bold text-[#0a0a0a] mb-2 tracking-tight">
          Programa Próximo Destino
        </h1>
        <p className="text-[#6b7280] text-lg mb-8">
          Encontre o caminho ideal para sua carreira
        </p>

        {/* Formulário */}
        <form className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-[#0a0a0a]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-[#f3f4f6] border-none focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-[#0a0a0a]">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="........"
              className="w-full px-4 py-3 rounded-lg bg-[#f3f4f6] border-none focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
            />
          </div>

        
       <a href='/PaginaPRincipal'><button
            type="submit"
            className="w-full bg-[#05050b] text-white font-bold py-3.5 rounded-lg mt-4 hover:bg-black transition-colors">
            Entrar
          </button></a>
        </form>

        {/* Footer Link */}
        <a 
          href="#" 
          className="mt-6 text-[#3b82f6] hover:underline font-medium"
        >
          Ainda não tenho conta
        </a>
      </div>
    </main>
 </> );
}