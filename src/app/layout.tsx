import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel - онлайн-курсы творчества для детей",
  description:
    "Онлайн-занятия по рисунку, живописи, дизайну и digital-направлениям для детей и подростков от 3 лет.",
  openGraph: {
    title: "Pixel - онлайн-курсы творчества для детей",
    description:
      "Курсы Pixel помогают детям развивать творчество, уверенность и digital-навыки с поддержкой преподавателей.",
    locale: "ru_RU",
    siteName: "Pixel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
