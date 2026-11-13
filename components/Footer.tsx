import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/60">
              Site profissional, agendamento online e painel administrativo para
              barbearias e salões.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40">Navegação</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/#como-funciona" className="text-charcoal/70 hover:text-charcoal">Como funciona</Link></li>
              <li><Link href="/#funcionalidades" className="text-charcoal/70 hover:text-charcoal">Funcionalidades</Link></li>
              <li><Link href="/#planos" className="text-charcoal/70 hover:text-charcoal">Planos</Link></li>
              <li><Link href="/#roadmap" className="text-charcoal/70 hover:text-charcoal">Roadmap</Link></li>
              <li><Link href="/#faq" className="text-charcoal/70 hover:text-charcoal">Perguntas frequentes</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="text-charcoal/70 hover:text-charcoal">{siteConfig.email}</a></li>
              <li><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-charcoal">WhatsApp</a></li>
              <li><Link href="/privacidade" className="text-charcoal/70 hover:text-charcoal">Política de privacidade</Link></li>
              <li><Link href="/termos" className="text-charcoal/70 hover:text-charcoal">Termos de uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. Todos os direitos reservados.</p>
          <p>{siteConfig.cnpj} · {siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
