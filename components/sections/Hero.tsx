import Link from "next/link";
import { SiteWindow } from "@/components/mockups/SiteWindow";
import { BookingWidget } from "@/components/mockups/BookingWidget";
import { ArrowRight, Check } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,#E9FBF3_0%,transparent_70%)]" />
      <div className="container-x grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
            Para barbearias e salões
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-[3.35rem]">
            Seu negócio com site próprio e agendamentos online.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70">
            Com o agello, seus clientes agendam pela internet e você gerencia
            serviços, horários e clientes em um só lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#planos" className="btn btn-primary">
              Conhecer os planos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#como-funciona" className="btn btn-secondary">
              Ver como funciona
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/60">
            {["20 dias de teste grátis", "Funciona no celular e no computador", "Sem instalação"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-mint-600" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <SiteWindow />
          <div className="absolute -bottom-10 -left-4 hidden sm:block">
            <BookingWidget className="scale-95" />
          </div>
          <p className="mt-16 text-[10px] text-charcoal/40 sm:mt-20">Telas ilustrativas com dados fictícios.</p>
        </div>
      </div>
    </section>
  );
}
