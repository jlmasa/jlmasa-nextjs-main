import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { ThemeSwitcher } from "../components/ThemeSwitcher";
export const metadata = {
  title: "JL Masa",
  description: "Web portfolio be Jl Masa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <nav className="absolute top-0 p-3 flex justify-between w-full z-50">
              <h1 className="font-burtons text-xl z-50 dark:text-gray-200">
                John Masa
              </h1>
              <ThemeSwitcher />
            </nav>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
