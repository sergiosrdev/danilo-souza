import { Link } from "react-router-dom";

const specialties = [
  {
    title: "Tratamento para dependencia quimica",
    text: "Acompanhamento psicologico para identificar gatilhos, fortalecer motivacao de mudanca e construir prevencao de recaidas.",
    focus: ["Mapeamento de contextos de risco", "Estruturacao de rotina de protecao", "Apoio ao processo de reorganizacao pessoal"]
  },
  {
    title: "Terapia Cognitivo-Comportamental",
    text: "Intervencoes praticas para reorganizar pensamentos, emocoes e comportamentos com metas objetivas de progresso.",
    focus: ["Reestruturacao cognitiva", "Treino de habilidades de enfrentamento", "Monitoramento de resultados por etapa"]
  },
  {
    title: "Ansiedade e regulacao emocional",
    text: "Suporte clinico para reduzir sofrimento, ampliar autocontrole e melhorar desempenho pessoal e profissional.",
    focus: ["Manejo de sintomas de ansiedade", "Fortalecimento de autorregulacao", "Planejamento de rotina emocionalmente sustentavel"]
  },
  {
    title: "Autoestima e desenvolvimento humano",
    text: "Processo terapeutico voltado ao fortalecimento da identidade, autonomia e tomada de decisao com clareza.",
    focus: ["Reconstrucao de autopercepcao", "Trabalho com limites e assertividade", "Definicao de metas de vida realistas"]
  }
];

export default function SpecialtiesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Especialidades</p>
        <h1 className="text-4xl font-bold text-white">Areas de atuacao clinica</h1>
        <p className="max-w-4xl text-slate-300">
          Cada frente de atendimento possui objetivos terapeuticos claros e estrategias especificas para a demanda
          apresentada em sessao.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {specialties.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{item.title}</h2>
            <p className="mt-3 text-slate-300">{item.text}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {item.focus.map((line) => (
                <li key={line} className="rounded-lg border border-slate-700 bg-slate-800/50 p-2">
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-700/30 bg-brand-900/20 p-6">
        <h2 className="text-2xl font-bold text-white">Precisa de orientacao para escolher a melhor linha?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          A definicao da estrategia terapeutica e feita apos avaliacao inicial da demanda, contexto de vida e objetivos.
        </p>
        <Link
          to="/contato"
          className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
