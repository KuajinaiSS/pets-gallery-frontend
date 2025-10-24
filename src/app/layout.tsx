export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Equipo 2</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      primary: "#042b73",
                      secondary: "#0f1155",
                      accent: "#ed5a24",
                      "background-light": "#f5f7f8",
                      "background-dark": "#0f1155",
                    },
                    fontFamily: { display: ["Manrope", "sans-serif"] },
                  },
                },
              }
            `,
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
