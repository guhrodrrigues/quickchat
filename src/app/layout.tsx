import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickChat",
  description:
    "O chatbot desenvolvido com a VercelSDK é a solução perfeita para melhorar o atendimento ao cliente e simplificar processos, 24 horas por dia, 7 dias por semana.",
  creator: "Gustavo Rodrigues",
  authors: [
    {
      name: "Gustavo Rodrigues",
      url: "https://guhrodrigues.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
