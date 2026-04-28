// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdurahmonov Zayniddin | Frontend Developer CV",
  description: "Professional CV of Abdurahmonov Zayniddin - Frontend Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}