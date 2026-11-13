import { ChevronDown } from "@/components/icons";

const faq = [
  { q: "O que é o agello?", a: "O agello é uma plataforma que reúne site próprio, agendamento online e painel administrativo para negócios que trabalham com horário marcado, começando por barbearias e salões." },
  { q: "Preciso ter conhecimento técnico para utilizar?", a: "Não. O agello é uma plataforma pronta, acessada pelo navegador. Você configura seus serviços e horários pelo painel, sem precisar programar nada." },
  { q: "O estabelecimento recebe um site próprio?", a: "Sim. Cada estabelecimento tem uma página própria com identidade visual personalizada, onde ficam os serviços, preços e informações de contato." },
  { q: "Como funciona o agendamento online?", a: "O cliente acessa o site do estabelecimento, escolhe o serviço, vê os horários disponíveis, seleciona a data e o horário e confirma o agendamento — sem precisar entrar em contato." },
  { q: "Consigo alterar os preços e serviços?", a: "Sim. Pelo painel administrativo você cadastra e edita serviços, controla os preços e a duração de cada um." },
  { q: "Consigo administrar meus horários?", a: "Sim. O painel permite visualizar os agendamentos e gerenciar os horários disponíveis do estabelecimento." },
  { q: "Posso acessar pelo celular?", a: "Sim. Tanto o site do estabelecimento quanto o painel administrativo funcionam no celular e no computador." },
  { q: "Como funciona o período de teste?", a: "São 20 dias de teste grátis em qualquer plano, para você conhecer a plataforma antes de decidir pela contratação." }
];

export function FAQ() {
  return (
    <section id="faq" className="section scroll-mt-24 border-t border-black/5 bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Dúvidas comuns sobre o agello.
          </h2>
          <p className="mt-4 text-charcoal/60">
            Se a sua dúvida não estiver aqui, fale com a gente.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-charcoal/10 bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-charcoal">
                {item.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-charcoal/50 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
