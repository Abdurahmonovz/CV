import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdurahmonov Zayniddin | Frontend Developer CV",
  description: "Frontend Developer portfolio and CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}