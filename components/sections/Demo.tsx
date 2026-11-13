"use client";
import { useState } from "react";
import { SiteWindow } from "@/components/mockups/SiteWindow";
import { BookingWidget } from "@/components/mockups/BookingWidget";
import { DashboardWindow } from "@/components/mockups/DashboardWindow";

const tabs = [
  { id: "site", label: "Site do estabelecimento" },
  { id: "booking", label: "Agendamento" },
  { id: "painel", label: "Painel administrativo" }
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Demo() {
  const [active, setActive] = useState<TabId>("site");

  return (
    <section id="demonstracao" className="section scroll-mt-24 border-t border-black/5 bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Demonstração</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Veja o que o seu cliente recebe.
          </h2>
          <p className="mt-4 text-charcoal/60">
            Telas ilustrativas do produto. Os dados são fictícios e servem apenas para demonstração.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === t.id
                  ? "bg-charcoal text-white"
                  : "border border-charcoal/15 bg-white text-charcoal/70 hover:bg-black/[0.03]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex min-h-[420px] items-start justify-center rounded-2xl border border-black/5 bg-[#F6F8F6] p-6 sm:p-10">
          {active === "site" && <SiteWindow className="w-full max-w-xl" />}
          {active === "booking" && <BookingWidget />}
          {active === "painel" && <DashboardWindow className="w-full max-w-2xl" />}
        </div>
      </div>
    </section>
  );
}
