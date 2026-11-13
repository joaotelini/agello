import { Lock } from "@/components/icons";

const services = [
  { name: "Corte Clássico", duration: "45 min", price: "R$ 55" },
  { name: "Barba Terapia", duration: "30 min", price: "R$ 40" },
  { name: "Corte + Barba", duration: "75 min", price: "R$ 85" },
  { name: "Hidratação", duration: "20 min", price: "R$ 30" }
];

export function SiteWindow({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#FBFBFA] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        <div className="ml-3 flex-1">
          <div className="mx-auto flex h-6 max-w-[240px] items-center justify-center gap-1.5 rounded-md bg-black/[0.04] text-[10px] text-charcoal/50">
            <Lock className="h-3 w-3" /> barbearianova.agello.app
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-charcoal text-[11px] font-semibold text-white">BN</div>
          <div>
            <p className="text-[12px] font-semibold leading-none text-charcoal">Barbearia Nova</p>
            <p className="mt-1 text-[10px] leading-none text-charcoal/50">São Paulo · SP</p>
          </div>
        </div>
        <div className="hidden gap-4 text-[11px] text-charcoal/60 sm:flex">
          <span>Serviços</span><span>Sobre</span><span>Contato</span>
        </div>
        <span className="rounded-md bg-mint-500 px-2.5 py-1.5 text-[10px] font-semibold text-charcoal">Agendar</span>
      </div>

      <div className="px-5">
        <div className="relative overflow-hidden rounded-xl bg-[#F2F7F4] p-4">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-mint-700">Barbearia Nova</p>
          <p className="mt-1 text-[15px] font-semibold leading-snug text-charcoal">
            Corte, barba e cuidado<br />em um só lugar.
          </p>
          <p className="mt-1 text-[10px] text-charcoal/60">Seg a Sáb · 09h às 19h</p>
          <span className="mt-3 inline-flex rounded-md bg-charcoal px-2.5 py-1.5 text-[10px] font-semibold text-white">Agendar horário</span>
        </div>
      </div>

      <div className="px-5 pb-5 pt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-semibold text-charcoal">Serviços</p>
          <p className="text-[10px] text-charcoal/50">Ver todos</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {services.map((s) => (
            <div key={s.name} className="rounded-lg border border-black/5 bg-white p-2.5">
              <p className="text-[11px] font-semibold text-charcoal">{s.name}</p>
              <p className="mt-0.5 text-[9px] text-charcoal/50">{s.duration}</p>
              <p className="mt-1 text-[11px] font-semibold text-mint-700">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
