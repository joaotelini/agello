import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "agello — site próprio e agendamento online para barbearias e salões",
  description:
    "Com o agello, seu estabelecimento tem site profissional, agendamento online e um painel para gerenciar serviços, horários e clientes. 20 dias de teste grátis.",
  metadataBase: new URL("https://agello.com.br"),
  openGraph: {
    title: "agello — site próprio e agendamento online",
    description:
      "Site profissional, agendamento online e painel administrativo para barbearias e salões.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
