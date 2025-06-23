import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YourCompany - Современные цифровые решения",
  description: "Мы создаем инновационные веб-приложения, мобильные приложения и цифровые решения для развития вашего бизнеса. React, Next.js, современные технологии.",
  keywords: "веб-разработка, мобильные приложения, React, Next.js, UI/UX дизайн, цифровые решения",
  authors: [{ name: "YourCompany" }],
  creator: "YourCompany",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://yourcompany.com",
    title: "YourCompany - Современные цифровые решения",
    description: "Создаем инновационные цифровые решения для развития вашего бизнеса",
    siteName: "YourCompany",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourCompany - Современные цифровые решения",
    description: "Создаем инновационные цифровые решения для развития вашего бизнеса",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
