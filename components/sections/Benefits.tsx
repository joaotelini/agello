import { Reveal } from "@/components/Reveal";
import { Globe, CalendarDays, Clock, Layers, Sparkles } from "@/components/icons";

const benefits = [
  { icon: Globe, title: "Seu negócio disponível online", text: "Um site próprio para o seu estabelecimento, acessível a qualquer hora." },
  { icon: CalendarDays, title: "Agendamentos sem depender de mensagens", text: "O cliente agenda sozinho pela internet, direto no site." },
  { icon: Clock, title: "Mais facilidade para organizar horários", text: "A agenda fica organizada e visível no painel administrativo." },
  { icon: Layers, title: "Serviços e preços centralizados", text: "Tudo em um só lugar: serviços, durações e valores." },
  { icon: Sparkles, title: "Experiência mais profissional", text: "Seu cliente é recebido por uma experiência digital mais organizada." }
];

export function Benefits() {
  return (
    <section id="beneficios" className="section scroll-mt-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">Benefícios</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Mais organização para você. Mais praticidade para seus clientes.
          </h2>
          <p className="mt-4 max-w-md text-charcoal/60">
            Sem promessas de resultado — apenas o que o agello entrega no dia a dia
            do seu estabelecimento.
          </p>
        </Reveal>

        <div className="grid gap-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-700">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal">{b.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/60">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
