function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Anatomia do corpo - Esporte clube
        </h1>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition">Início</a>
          <a href="#" className="hover:text-cyan-400 transition">Atividades</a>
          <a href="#" className="hover:text-cyan-400 transition">Sobre</a>
          <a href="#" className="hover:text-cyan-400 transition">Contato</a>
        </nav>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-xl font-semibold transition">
          Aula grátisddd
        </button>
      </div>
    </header>
  )
}

export default Header