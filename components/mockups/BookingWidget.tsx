const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];
const selected = "13:00";

export function BookingWidget({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-[300px] rounded-2xl border border-black/10 bg-white p-4 shadow-card ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal/40">Agendamento</p>
      <p className="mt-1 text-sm font-semibold text-charcoal">Novo agendamento</p>

      <div className="mt-3 rounded-lg bg-mint-50 p-2.5">
        <p className="text-[9px] uppercase tracking-wider text-mint-700">Serviço</p>
        <p className="mt-0.5 text-[12px] font-semibold text-charcoal">Corte Clássico</p>
        <p className="text-[10px] text-charcoal/60">45 min · R$ 55</p>
      </div>

      <p className="mt-3 text-[10px] font-medium text-charcoal/50">Data</p>
      <div className="mt-1 flex gap-1.5">
        {["12", "13", "14", "15", "16"].map((d, i) => (
          <div key={d} className={`flex-1 rounded-md py-1.5 text-center ${i === 2 ? "bg-charcoal text-white" : "bg-black/[0.04] text-charcoal/70"}`}>
            <p className="text-[9px] opacity-70">{["seg", "ter", "qua", "qui", "sex"][i]}</p>
            <p className="text-[11px] font-semibold">{d}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[10px] font-medium text-charcoal/50">Horário</p>
      <div className="mt-1 grid grid-cols-3 gap-1.5">
        {slots.map((s) => (
          <div key={s} className={`rounded-md py-1.5 text-center text-[10px] font-semibold ${s === selected ? "bg-mint-500 text-charcoal" : "bg-black/[0.04] text-charcoal/70"}`}>
            {s}
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-md bg-charcoal py-2 text-center text-[11px] font-semibold text-white">
        Confirmar agendamento
      </div>
    </div>
  );
}
