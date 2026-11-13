import { Reveal } from "@/components/Reveal";
import { Bell, CreditCard, Smartphone, BarChart, Gift, Layers } from "@/components/icons";

type Status = "Em desenvolvimento" | "Planejado" | "Em estudo";

const roadmap: { icon: typeof Bell; title: string; text: string; status: Status }[] = [
  { icon: Bell, title: "Notificações automáticas por WhatsApp", text: "Avisos de confirmação e lembretes enviados automaticamente ao cliente.", status: "Em desenvolvimento" },
  { icon: Bell, title: "Lembretes para reduzir faltas", text: "Mensagens automáticas antes do horário agendado.", status: "Planejado" },
  { icon: CreditCard, title: "Pagamento online com sinal", text: "Cobrança de sinal ou depósito no momento do agendamento.", status: "Em estudo" },
  { icon: Smartphone, title: "Aplicativo para iOS e Android", text: "Versão do painel e do agendamento em aplicativo nativo.", status: "Planejado" },
  { icon: BarChart, title: "Relatórios de ocupação e desempenho", text: "Visão de horários mais movimentados e desempenho dos serviços.", status: "Planejado" },
  { icon: Gift, title: "Programa de fidelidade e cupons", text: "Criação de cupons e recompensas para clientes recorrentes.", status: "Em estudo" },
  { icon: Layers, title: "Gestão de múltiplas unidades", text: "Administração de mais de um estabelecimento em um só painel.", status: "Em estudo" }
];

const statusStyle: Record<Status, string> = {
  "Em desenvolvimento": "bg-mint-50 text-mint-700",
  "Planejado": "bg-charcoal/5 text-charcoal/60",
  "Em estudo": "bg-black/[0.03] text-charcoal/50"
};

export function Roadmap() {
  return (
    <section id="roadmap" className="section scroll-mt-24">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Roadmap</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            O que estamos construindo para o futuro do agello.
          </h2>
          <p className="mt-4 text-charcoal/60">
            Recursos que estão no nosso planejamento. Ainda não fazem parte da entrega
            atual e podem sofrer alterações.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((r, i) => (
            <Reveal key={r.title} delay={i * 50}>
              <article className="card h-full p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-mint-50 text-mint-700">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyle[r.status]}`}>
                    {r.status}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-charcoal">{r.title}</h3>
                <p className="mt-1.5 text-sm text-charcoal/60">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-charcoal/50">
          Roadmap informativo, sujeito a alteração. Nenhum destes recursos está incluído
          nos planos atuais até que seja oficialmente lançado.
        </p>
      </div>
    </section>
  );
}
