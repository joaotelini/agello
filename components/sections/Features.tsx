import { Reveal } from "@/components/Reveal";
import { Globe, CalendarDays, LayoutDashboard, Check } from "@/components/icons";

const features = [
  {
    icon: Globe,
    title: "Site profissional",
    description: "Uma página própria para o seu estabelecimento, com a sua identidade e os seus serviços.",
    items: ["Site próprio do estabelecimento", "Identidade visual personalizada", "Serviços e preços apresentados", "Informações de contato e localização", "Acesso por celular e computador"]
  },
  {
    icon: CalendarDays,
    title: "Agendamento online",
    description: "Seu cliente escolhe o serviço, a data e o horário disponível — sem precisar mandar mensagem.",
    items: ["Visualização dos serviços disponíveis", "Escolha do serviço desejado", "Consulta de horários disponíveis", "Seleção de data e horário", "Agendamento sem contato direto"]
  },
  {
    icon: LayoutDashboard,
    title: "Painel administrativo",
    description: "Toda a operação organizada em um painel simples, com agendamentos, horários, serviços e clientes.",
    items: ["Visualização dos agendamentos", "Gerenciamento dos horários", "Cadastro e edição de serviços", "Controle de preços e duração", "Visualização e gestão de clientes"]
  }
];

export function Features() {
  return (
    <section id="funcionalidades" className="section scroll-mt-24 border-t border-black/5 bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">O que o agello entrega</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Tudo o que seu estabelecimento precisa para receber agendamentos online.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="card flex h-full flex-col p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-mint-50 text-mint-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{f.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-black/5 pt-5">
                  {f.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" /> {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
