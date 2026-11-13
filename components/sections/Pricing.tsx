import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { Check, ArrowRight } from "@/components/icons";

const plans = [
  { name: "Mensal", price: "R$ 75,90", period: "/mês", billing: "Cobrança mensal de R$ 75,90", saving: null, featured: false },
  { name: "Trimestral", price: "R$ 69,90", period: "/mês", billing: "Cobrança trimestral de R$ 209,70", saving: "Economize 8% em relação ao mensal", featured: false },
  { name: "Semestral", price: "R$ 59,90", period: "/mês", billing: "Cobrança semestral de R$ 359,40", saving: "Economize 21% em relação ao mensal", featured: true }
];

const included = [
  "Site profissional personalizado",
  "Agendamento online para clientes",
  "Painel administrativo completo",
  "Cadastro de serviços, preços e duração",
  "Gestão de horários e clientes",
  "Acesso pelo celular e computador"
];

export function Pricing() {
  return (
    <section id="planos" className="section scroll-mt-24 border-t border-black/5 bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Planos e preços</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Um único produto. Três formas de pagar.
          </h2>
          <p className="mt-4 text-charcoal/60">
            Todos os planos incluem a mesma solução completa. A diferença está apenas
            na condição de pagamento.
          </p>
        </Reveal>

        <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full border border-mint-200 bg-mint-50 px-4 py-2 text-sm text-mint-800">
          <Check className="h-4 w-4" />
          {siteConfig.trialDays} dias de teste grátis em qualquer plano
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 ${p.featured ? "border-mint-300 shadow-card" : "border-charcoal/10 shadow-soft"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-mint-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
                    Melhor condição
                  </span>
                )}
                <p className="text-sm font-semibold text-charcoal">{p.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-charcoal">{p.price}</span>
                  <span className="text-sm text-charcoal/50">{p.period}</span>
                </div>
                <p className="mt-1 text-xs text-charcoal/50">{p.billing}</p>
                {p.saving && <p className="mt-1 text-xs font-medium text-mint-700">{p.saving}</p>}

                <ul className="mt-6 space-y-2.5 border-t border-black/5 pt-5">
                  {included.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" /> {it}
                    </li>
                  ))}
                </ul>

                <Link
                  href={siteConfig.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn mt-6 w-full ${p.featured ? "btn-primary" : "btn-secondary"}`}
                >
                  Contratar plano <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-charcoal/50">
          Sem taxas ocultas. Sem limite de agendamentos divulgado além do plano.
          Consulte os termos para detalhes.
        </p>
      </div>
    </section>
  );
}
