import { LayoutDashboard, CalendarDays, ListChecks, Users, Clock } from "@/components/icons";

const nav = [
  { icon: LayoutDashboard, label: "Visão geral", active: true },
  { icon: CalendarDays, label: "Agendamentos" },
  { icon: ListChecks, label: "Serviços" },
  { icon: Clock, label: "Horários" },
  { icon: Users, label: "Clientes" }
];

const appts = [
  { time: "09:00", client: "João P.", service: "Corte Clássico", status: "Confirmado" },
  { time: "10:30", client: "Marcos L.", service: "Corte + Barba", status: "Confirmado" },
  { time: "13:00", client: "Rafael S.", service: "Barba Terapia", status: "Aguardando" },
  { time: "15:30", client: "Pedro A.", service: "Corte Clássico", status: "Confirmado" },
  { time: "17:00", client: "Lucas M.", service: "Hidratação", status: "Confirmado" }
];

export function DashboardWindow({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card ${className}`}>
      <div className="flex">
        <aside className="hidden w-36 shrink-0 border-r border-black/5 bg-[#FBFBFA] p-3 sm:block">
          <div className="mb-3 flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-md bg-mint-500" />
            <span className="text-[10px] font-semibold text-charcoal">agello</span>
          </div>
          <ul className="space-y-0.5">
            {nav.map((item) => (
              <li key={item.label} className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] ${item.active ? "bg-mint-50 font-semibold text-mint-700" : "text-charcoal/60"}`}>
                <item.icon className="h-3 w-3" />
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-charcoal/50">Painel · Barbearia Nova</p>
              <p className="text-sm font-semibold text-charcoal">Agendamentos de hoje</p>
            </div>
            <span className="rounded-md bg-mint-50 px-2 py-1 text-[9px] font-semibold text-mint-700">Hoje</span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: "Hoje", value: "12" },
              { label: "Ocupação", value: "78%" },
              { label: "Clientes", value: "214" }
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-black/5 bg-white p-2">
                <p className="text-[9px] text-charcoal/50">{s.label}</p>
                <p className="text-[13px] font-semibold text-charcoal">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-black/5">
            <div className="grid grid-cols-[42px_1fr_auto] gap-2 border-b border-black/5 bg-black/[0.02] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-charcoal/40">
              <span>Hora</span><span>Cliente · Serviço</span><span>Status</span>
            </div>
            {appts.map((a) => (
              <div key={a.time} className="grid grid-cols-[42px_1fr_auto] items-center gap-2 border-b border-black/5 px-2.5 py-1.5 last:border-0">
                <span className="text-[10px] font-semibold text-charcoal/70">{a.time}</span>
                <span className="truncate text-[10px] text-charcoal">
                  <span className="font-medium">{a.client}</span>
                  <span className="text-charcoal/50"> · {a.service}</span>
                </span>
                <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${a.status === "Confirmado" ? "bg-mint-50 text-mint-700" : "bg-amber-50 text-amber-700"}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
