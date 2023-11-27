import { GeistSans } from 'geist/font'
import './globals.css'
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Menu from "@/components/menu/Menu";
import SupabaseProvider from "@/providers/supabase-provider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'CATBOX',
  description: 'Custom CATBOX cases for PC. Solutions for professionals and gamers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground overflow-x-hidden">
        <main className="min-h-[100vh] flex flex-col justify-between">
            <SupabaseProvider>
                <ModalProvider />
                <ToastProvider />
                <Menu />
                {children}
                <Footer />
            </SupabaseProvider>
        </main>
      </body>
    </html>
  )
}
