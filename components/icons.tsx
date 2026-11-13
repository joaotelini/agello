import type { ReactNode, SVGProps } from "react";

function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M20 6 9 17l-5-5" /></Icon>
);
export const ChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
);
export const X = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M18 6 6 18M6 6l12 12" /></Icon>
);
export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></Icon>
);
export const CalendarDays = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /></Icon>
);
export const LayoutDashboard = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></Icon>
);
export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>
);
export const Sparkles = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" /></Icon>
);
export const Users = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 5.5a3.2 3.2 0 0 1 0 6.2M20.5 20a5.5 5.5 0 0 0-4.5-5.4" /></Icon>
);
export const ListChecks = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 6h11M4 12h11M4 18h8" /><path d="M18 6l2 2 3-3" /></Icon>
);
export const Bell = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 19a2 2 0 0 0 4 0" /></Icon>
);
export const CreditCard = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></Icon>
);
export const Smartphone = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="6" y="3" width="12" height="18" rx="2.5" /><path d="M11 18h2" /></Icon>
);
export const BarChart = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Icon>
);
export const Gift = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M3 12h18M12 8v12M8 8a2.5 2.5 0 1 1 0-5c2 0 4 5 4 5M16 8a2.5 2.5 0 1 0 0-5c-2 0-4 5-4 5" /></Icon>
);
export const Layers = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></Icon>
);
export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></Icon>
);
export const Lock = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Icon>
);
