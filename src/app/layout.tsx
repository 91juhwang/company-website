import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ship Ideas Studio",
  description: "From Idea to Impact: Custom Software, Websites, Automation, AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-bg-beige text-ink">
        {children}
      </body>
    </html>
  );
}