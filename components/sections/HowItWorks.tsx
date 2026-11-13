import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Seu estabelecimento ganha um site",
    text: "O agello disponibiliza uma página profissional personalizada para apresentar seu negócio.",
    mini: (
      <div className="rounded-lg border border-black/5 bg-white p-2">
        <div className="mb-1.5 flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-black/10" /><span className="h-1.5 w-1.5 rounded-full bg-black/10" /><span className="h-1.5 w-1.5 rounded-full bg-black/10" />
        </div>
        <div className="rounded bg-[#F2F7F4] p-2">
          <p className="text-[9px] font-semibold text-charcoal">Barbearia Nova</p>
          <div className="mt-1 h-1.5 w-3/4 rounded bg-black/10" />
          <div className="mt-1 h-1.5 w-1/2 rounded bg-black/10" />
        </div>
      </div>
    )
  },
  {
    n: "02",
    title: "Seus clientes agendam online",
    text: "O cliente acessa o site, escolhe o serviço e seleciona um horário disponível.",
    mini: (
      <div className="rounded-lg border border-black/5 bg-white p-2">
        <p className="text-[9px] font-semibold text-charcoal">Escolha um horário</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {["09:00", "10:30", "13:00"].map((s, i) => (
            <span key={s} className={`rounded py-1 text-center text-[8px] font-semibold ${i === 2 ? "bg-mint-500 text-charcoal" : "bg-black/[0.04] text-charcoal/60"}`}>{s}</span>
          ))}
        </div>
      </div>
    )
  },
  {
    n: "03",
    title: "Você gerencia tudo pelo painel",
    text: "O proprietário acompanha os agendamentos e administra os serviços e horários pelo painel.",
    mini: (
      <div className="rounded-lg border border-black/5 bg-white p-2">
        <p className="text-[9px] font-semibold text-charcoal">Agendamentos</p>
        <div className="mt-1.5 space-y-1">
          {["09:00 João P.", "10:30 Marcos L.", "13:00 Rafael S."].map((r) => (
            <div key={r} className="flex items-center justify-between rounded bg-black/[0.03] px-1.5 py-1 text-[8px] text-charcoal/70">
              <span>{r}</span><span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Três passos para receber agendamentos online.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="card h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-mint-600">{s.n}</span>
                  <span className="h-px flex-1 mx-4 bg-black/10" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{s.text}</p>
                <div className="mt-5">{s.mini}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
