'use client'

import DataTable from "@/components/DataTable";
import Link from "next/link";
import { useEffect, useState } from "react";

const image = "/iconSite.png";
const fotoAnfitrioes = "/photos/fotoAnfitrioes.jpg";

/* ---------- reusable pieces ---------- */

const Section = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`max-w-5xl mx-auto px-5 py-14 md:py-20 ${className ?? ""}`}>{children}</section>
);

const Headline = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-3xl md:text-4xl text-deep mb-6 leading-tight">{children}</h2>
);

/* ---------- Header ---------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-deep/98 shadow-xl backdrop-blur-md border-b border-accent/20" : "bg-gradient-to-r from-deep/95 via-deep to-deep/95"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={image} alt="Solaris" className="h-10 w-10 rounded-full border-2 border-accent/30 group-hover:border-accent transition-all duration-300" />
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">Pousada Solaris</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm">
            <Link href="#apartamentos" className="text-white/95 hover:text-accent transition-all duration-300 font-medium relative after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1.5 after:bg-accent after:transition-all after:shadow-[0_0_8px_var(--accent)]">Apartamentos</Link>
            <Link href="#mapa" className="text-white/95 hover:text-accent transition-all duration-300 font-medium relative after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1.5 after:bg-accent after:transition-all after:shadow-[0_0_8px_var(--accent)]">Localização</Link>
            <Link href="#quemsomos" className="text-white/95 hover:text-accent transition-all duration-300 font-medium relative after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1.5 after:bg-accent after:transition-all after:shadow-[0_0_8px_var(--accent)]">Quem somos</Link>
            <Link href="#contatos" className="text-white/95 hover:text-accent transition-all duration-300 font-medium relative after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1.5 after:bg-accent after:transition-all after:shadow-[0_0_8px_var(--accent)]">Contatos</Link>
          </div>
        </nav>
      </header>

      {/* Mobile nav — controlled hamburger menu */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className={`cursor-pointer bg-deep/98 backdrop-blur-md text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all border border-white/30 hover:border-accent/50 hover:scale-105 ${menuOpen ? "rotate-90" : ""}`}
        >
          ☰
        </button>
        <div
          className={`absolute top-16 right-0 bg-deep/98 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-2 text-white text-sm shadow-2xl border border-accent/20 min-w-[220px] transition-all duration-200 ease-out overflow-hidden ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <Link href="#apartamentos" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-accent/15 hover:pl-6 text-left border-l-2 border-transparent hover:border-accent">Apartamentos</Link>
          <Link href="#mapa" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-accent/15 hover:pl-6 text-left border-l-2 border-transparent hover:border-accent">Localização</Link>
          <Link href="#quemsomos" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-accent/15 hover:pl-6 text-left border-l-2 border-transparent hover:border-accent">Quem somos</Link>
          <Link href="#contatos" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-accent/15 hover:pl-6 text-left border-l-2 border-transparent hover:border-accent">Contatos</Link>
        </div>
      </div>
    </>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <div className="relative bg-linear-to-br from-deep via-deep/95 to-deep/90 text-white overflow-hidden">
      {/* Distinctive coastal texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "url('/photos/fotoAnfitrioes.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        filter: "sepia(20%) saturate(120%) contrast(1.1)",
      }} />
      <div className="absolute inset-0 bg-linear-to-t from-deep/80 via-deep/40 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-5 py-28 md:py-40">
        <p className="font-body text-accent text-sm tracking-widest uppercase mb-4 font-semibold">Bem-vindo ao seu refúgio praiano</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 font-light">
          Pousada Solaris
        </h1>
        <p className="font-body text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
          Uma pousada onde Cláudio e Letícia recebem você com calor humano, conforto e as vistas do litoral de Praia da Pinhera.
        </p>
      </div>
    </div>
  );
}

/* ---------- Apartments ---------- */

function Apartamentos() {
  return (
    <Section id="apartamentos">
      <Headline>Apartamentos</Headline>
      <DataTable />
    </Section>
  );
}

/* ---------- Map ---------- */

function Mapa() {
  return (
    <Section id="mapa">
      <Headline>Localização</Headline>
      <div className="rounded-lg overflow-hidden border border-sand aspect-video">
        <iframe
          className="w-full h-full border-0"
          title="Mapa Pousada Solaris"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.41262842182573!2d-48.58595790472369!3d-27.883492178437272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDUzJzAwLjYiUyA0OMKwMzUnMDkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1763989766955!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}

/* ---------- Quem Somos ---------- */

function QuemSomos() {
  return (
    <Section id="quemsomos">
      <Headline>Quem somos</Headline>

      {/* Simple, readable narrative */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <p className="mb-6 leading-relaxed font-body text-lg">
            Cláudio é um dos anfitriões da Pousada Solaris e tem um cuidado especial para que sua estadia
            seja a melhor possível. Sempre atencioso, educado e gentil, recebe a todos de braços abertos,
            oferecendo uma recepção calorosa e dicas para aproveitar ao máximo a sua hospedagem.
          </p>
        </div>
        <div className="flex-1">
          <p className="mb-6 leading-relaxed font-body text-lg">
            Letícia é a combinação perfeita de gentileza, educação e organização. É ela quem cuida para que
            todos os apartamentos tenham uma harmonia encantadora, trazendo uma beleza única e aconchegante
            para cada cantinho da pousada.
          </p>
        </div>
      </div>

      {/* Clean, readable mission section */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-accent mb-8">
        <h3 className="text-deep font-display font-semibold mb-3 text-lg">
          Nossa Missão
        </h3>
        <p className="text-deep/80 leading-relaxed">
          <strong className="text-accent">Criar momentos inesquecíveis</strong> onde o conforto encontra a hospitalidade autêntica
          em Praia da Pinhera. Transformamos cada estadia em uma experiência que você vai querer contar aos amigos.
        </p>
      </div>

      {/* Simple, clear photo presentation */}
      <div className="relative">
        <img
          src={fotoAnfitrioes}
          alt="Cláudio e Letícia recebendo hóspedes na Pousada Solaris"
          className="rounded-lg w-full max-w-2xl mx-auto shadow-lg border-4 border-accent/30"
        />
      </div>

      {/* Clear attribution */}
      <div className="mt-6 text-center text-sm">
        <p>Fotografia: Cláudio e Letícia recebendo hóspedes na Pousada Solaris</p>
      </div>
    </Section>
  );
}

/* ---------- Contatos ---------- */

function Contatos() {
  const links = [
    { href: "https://www.instagram.com/solaris.pousada/", label: "Instagram", icon: "📷", description: "Acompanhe nosso dia a dia" },
    { href: "https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5551983370514&e=AUDZXUsQUIaK-lbzzCV0kUF5lsV20S5EYIiim8I5ikLlbB77VV4fGvJG61nPLKKegthKy3J5wcp-X3JnQAdADhOpgPhT0zyBZui6mf_UCrNsQRxx-i7yz-aTscNcoJHARqC92inDau50xx8dVteutp1l0SYmkQ", label: "Whatsapp", icon: "💬", description: "Fale diretamente com a equipe" },
    { href: "https://www.airbnb.com.br/users/profile/1470675337183120962?previous_page_name=PdpHomeMarketplace", label: "AirBnb", icon: "🏠", description: "Visualize avaliações e reservas" },
  ];
  return (
    <Section id="contatos">
      <Headline>Contatos</Headline>
      <div className="text-center mb-8">
        <p className="text-fg/80 font-body max-w-2xl mx-auto">
          Entre em contato conosco através das plataformas abaixo. Estamos prontos para ajudar você a planejar a estadia perfeita em Praia da Pinhera.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-card-bg border border-sand px-6 py-4 rounded-xl hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{l.icon}</span>
            <div className="text-left">
              <div className="font-display font-semibold text-deep group-hover:text-accent transition-colors">{l.label}</div>
              <div className="text-xs text-fg/60 group-hover:text-accent/70 transition-colors">{l.description}</div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-fg/50 text-sm">
          Responderemos o mais rápido possível • Atendimento de segunda a sábado, das 9h às 20h
        </p>
      </div>
    </Section>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="bg-bg min-h-dvw">
      <Header />
      <main className="pt-16">
        <Hero />
        <Apartamentos />
        <Mapa />
        <QuemSomos />
        <Contatos />
      </main>
      <footer className="bg-deep text-white/60 text-center text-sm py-8">
        Pousada Solaris © {new Date().getFullYear()}
      </footer>
    </div>
  );
}