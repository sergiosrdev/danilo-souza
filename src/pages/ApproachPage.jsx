import { Link } from "react-router-dom";

const stages = [
  {
    title: "1. Acolhimento inicial",
    text: "Escuta da queixa principal, contexto atual e historico relevante para compreender a demanda com clareza."
  },
  {
    title: "2. Avaliacao clinica",
    text: "Mapeamento de sintomas, fatores de manutencao do sofrimento e definicao de foco de intervencao."
  },
  {
    title: "3. Plano terapeutico",
    text: "Organizacao de objetivos, frequencia de sessao e estrategias praticas alinhadas ao momento do paciente."
  },
  {
    title: "4. Consolidacao de ganhos",
    text: "Revisao de progresso, prevencao de recaidas e fortalecimento de autonomia para continuidade da evolucao."
  }
];

export default function ApproachPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Abordagem</p>
        <h1 className="text-4xl font-bold text-white">Como o atendimento e conduzido</h1>
        <p className="max-w-4xl text-slate-300">
          O processo terapeutico segue etapas claras para garantir direcao clinica, seguranca e continuidade no cuidado.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {stages.map((stage) => (
          <article key={stage.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{stage.title}</h2>
            <p className="mt-3 text-slate-300">{stage.text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-700/30 bg-brand-900/20 p-6">
        <h2 className="text-2xl font-bold text-white">Objetivo principal da psicoterapia</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Reduzir sofrimento emocional, ampliar clareza de decisao e fortalecer recursos internos para lidar melhor com desafios
          pessoais, familiares e profissionais.
        </p>
        <Link
          to="/contato"
          className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Iniciar acompanhamento
        </Link>
      </div>
    </section>
  );
}
