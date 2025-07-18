import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PortfolioProvider } from "@/hooks/use-portfolio";

export const metadata: Metadata = {
  title: "Alisha's Atelier - Portfolio",
  description: "Alisha Ibarra Bello's personal portfolio showcasing projects and experience.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <PortfolioProvider>
          {children}
          <Toaster />
        </PortfolioProvider>
      </body>
    </html>
  );
}
