import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "@/components/icons";

export function FinalCTA() {
  return (
    <section id="comecar" className="scroll-mt-24 pb-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-mint-200 bg-mint-50 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mint-200/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-mint-100 blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Seu próximo passo para uma gestão mais organizada começa aqui.
            </h2>
            <p className="mt-4 text-charcoal/70">
              Tenha um site profissional, agendamentos online e um painel para
              administrar seu estabelecimento.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Conhecer o agello <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Falar com a gente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
