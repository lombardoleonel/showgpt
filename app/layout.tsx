import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShowGPT",
  description: "¡Encuentra las mejores recomendaciones de series y películas!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative flex flex-col justify-center items-center gap-8 w-full min-h-screen h-full p-8 bg-black text-white">
        <Toaster expand={true}/>
        <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_35%,#e6004350,transparent)]"></div>
        </div>
        {children}
        <footer>
          <p className="flex gap-1 text-center text-sm font-semibold">
            <span className="text-white text-opacity-25">Developed by</span>
            <Link href="https://linkedin.com/in/leonelombardo" target="_blank" className="text-nowrap text-white text-opacity-25 hover:text-opacity-100 transition-colors duration-300">Leonel Lombardo</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
