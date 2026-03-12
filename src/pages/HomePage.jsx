import { Link } from "react-router-dom";

const highlights = [
  "Atendimento psicologico online e presencial",
  "Foco clinico em dependencia quimica e TCC",
  "Escuta qualificada com plano terapeutico estruturado"
];

const pages = [
  {
    title: "Perfil Profissional",
    text: "Conheca a formacao complementar, experiencia clinica e posicionamento tecnico do Dr. Danilo Souza.",
    to: "/perfil-profissional"
  },
  {
    title: "Especialidades",
    text: "Veja em detalhes as principais frentes de atendimento e para quais demandas cada uma e indicada.",
    to: "/especialidades"
  },
  {
    title: "Abordagem",
    text: "Entenda o fluxo de atendimento, etapas do acompanhamento e objetivos terapeuticos.",
    to: "/abordagem"
  },
  {
    title: "Artigos",
    text: "Conteudos educativos para orientar pacientes e familiares com base em pratica clinica.",
    to: "/artigos"
  },
  {
    title: "FAQ",
    text: "Respostas rapidas para duvidas frequentes sobre sessao, formato e inicio do atendimento.",
    to: "/faq"
  },
  {
    title: "Contato",
    text: "Canais oficiais para agendamento por WhatsApp, email e Instagram.",
    to: "/contato"
  }
];

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-brand-700/40 bg-slate-900/80 p-8 shadow-2xl shadow-brand-900/20 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          Site institucional
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Danilo Souza, psicologo clinico atendimento online.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Atendimento com metodo, acolhimento e responsabilidade tecnica para promover estabilidade emocional, autonomia
          e desenvolvimento pessoal.
        </p>

        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {highlights.map((item) => (
            <li key={item} className="rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contato"
            className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400"
          >
            Agendar atendimento
          </Link>
          <Link
            to="/perfil-profissional"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-brand-500 hover:text-brand-200"
          >
            Conhecer perfil profissional
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <article key={page.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{page.title}</h2>
            <p className="mt-3 text-slate-300">{page.text}</p>
            <Link to={page.to} className="mt-5 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200">
              Acessar pagina
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
