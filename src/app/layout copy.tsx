import { FooterComponent } from "@/components/Footer";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col text-gray-900 antialiased">

        <NavbarComponent />
        <main className="flex-1">
          {children}
        </main>
        <FooterComponent />

      </body>
    </html>
  );
}
