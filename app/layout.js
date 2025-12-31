import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata = {
  title: "Spott",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={'bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white'}>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          

            {/* Header */}

            <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div></div>
                <div></div>
              </div>

              <div className="relative z-10">{children}</div>
              
              {/* footer */}
            </main>
          </ThemeProvider>
        
      </body>
    </html>
  );
}
