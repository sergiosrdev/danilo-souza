const faq = [
  {
    question: "Como agendar a primeira sessao?",
    answer: "O agendamento pode ser feito por WhatsApp, email ou Instagram. Voce recebe as opcoes de horario e confirma o melhor formato."
  },
  {
    question: "O atendimento pode ser online?",
    answer: "Sim. O atendimento e realizado online e presencialmente, de acordo com a necessidade e disponibilidade do paciente."
  },
  {
    question: "Qual a frequencia das sessoes?",
    answer: "A frequencia e definida na avaliacao inicial, considerando demanda clinica, objetivos e etapa do tratamento."
  },
  {
    question: "Existe sigilo no atendimento?",
    answer: "Sim. O sigilo profissional e principio etico fundamental e orienta toda a conducao do processo terapeutico."
  },
  {
    question: "Atende apenas dependencia quimica?",
    answer: "Nao. O atendimento inclui tambem ansiedade, regulacao emocional, autoestima e outras demandas clinicas."
  }
];

export default function FaqPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">FAQ</p>
        <h1 className="text-4xl font-bold text-white">Perguntas frequentes</h1>
        <p className="max-w-4xl text-slate-300">
          Respostas objetivas para duvidas comuns sobre inicio do atendimento, formato das sessoes e processo clinico.
        </p>
      </header>

      <div className="space-y-4">
        {faq.map((item) => (
          <article key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{item.question}</h2>
            <p className="mt-3 text-slate-300">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
