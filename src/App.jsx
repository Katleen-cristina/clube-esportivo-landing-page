import { useState } from "react"
import logo from "./assets/logo.png"

function App() {
  const services = [
    {
      title: "Musculação",
      description: "Treinos modernos para evolução física.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Pilates",
      description: "Equilíbrio e bem-estar em um ambiente acolhedor.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Tênis",
      description: "Estrutura moderna para prática esportiva.",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Área Feminina",
      description: "Espaço pensado para conforto e privacidade, com aulas coletivas que abrangem diversas modalidades do clube, especialmente desenvolvidas para o público feminino.",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1600&q=80",
    },
  ]

  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="bg-black border-b border-white/10 px-4 py-6">
        <div className="flex flex-col items-center gap-4">

          <img src={logo} alt="Logo" className="h-50 w-auto" />

          <h1 className="text-green-400 font-extrabold text-white">
            Anatomia do Corpo
          </h1>

          <p className="text-green-400 tracking-[0.3em] font-semibold">
            SPORTS CLUB
          </p>

          <nav className="flex gap-6 text-white mt-2">
            <a href="#" className="hover:text-green-400 transition">Início</a>
            <a href="#atividades" className="hover:text-green-400 transition">Serviços</a>
            <a href="#contato" className="hover:text-green-400 transition">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        className="h-[60vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedService.image})` }}
      >
        <div className="bg-black/70 p-6 m-4 rounded-xl max-w-xl">
          <h2 className="text-3xl font-bold text-white">
            {selectedService.title}
          </h2>
          <p className="mt-3 text-white">{selectedService.description}</p>
        </div>
      </section>

      {/* ATIVIDADES */}
      <section id="atividades" className="py-12 px-4">
        <h3 className="text-center text-3xl font-bold mb-8 text-white">
          Nossas Atividades
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-[#0b1f3a] p-6 rounded-xl border border-white/10 hover:bg-green-500 hover:text-black transition"
            >
              {service.title}
            </button>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-[#0b1f3a] py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Sobre o clube
            </h3>

            <p className="text-white mb-4">
              O Anatomia do Corpo Sports Club foi criado para proporcionar uma
              experiência completa, indo além do treino tradicional.
            </p>

            <p className="text-white">
              Nosso objetivo é oferecer um ambiente acolhedor, moderno e
              motivador, incentivando o bem-estar e a evolução pessoal.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-12 px-4">
        <h3 className="text-center text-3xl font-bold mb-8 text-white">
          Fale Conosco
        </h3>

        <form className="max-w-3xl mx-auto grid gap-4">
          <input
            placeholder="Nome"
            className="p-3 bg-[#111] border border-white/20 text-white"
          />
          <input
            placeholder="Email"
            className="p-3 bg-[#111] border border-white/20 text-white"
          />
          <textarea
            placeholder="Mensagem"
            className="p-3 bg-[#111] border border-white/20 text-white"
          ></textarea>

          <button className="bg-green-500 text-black py-3 font-bold hover:bg-green-400">
            Enviar
          </button>
        </form>
      </section>

      {/* INFORMAÇÕES FINAIS */}
      <section className="bg-[#0b1f3a] px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-green-400 font-bold mb-3">Nossas Unidades</h4>
            <p>Betim</p>
            <p>Contagem</p>
            <p>Belo Horizonte</p>
          </div>

          <div>
            <h4 className="text-green-400 font-bold mb-3">Institucional</h4>
            <p>Sobre nós</p>
            <p>Planos</p>
            <p>Trabalhe conosco</p>
          </div>

          <div>
            <h4 className="text-green-400 font-bold mb-3">Contato</h4>
            <p>(31) 99999-9999</p>
            <p>katleencristina2@gmail.com</p>
            <p>@katleen_cardoso</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08182d] py-6 text-center text-white">
        Desenvolvido por <span className="text-green-400">Katleen Cristina</span>
      </footer>

    </div>
  )
}

export default App