import { Poppins } from 'next/font/google';
import './globals.css';
import Frame from './components/Frame';
import Navbar from './components/Navbar';
import WhatsApp from './components/WhatsApp';
import FooterSection from './components/Footer/FooterSection';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Import Material Symbols */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${poppins.variable} font-poppins relative min-h-screen bg-white`} suppressHydrationWarning>
        <Navbar />
        {/* <Frame /> */}
        {children}
        <FooterSection />
        <WhatsApp />
      </body>
    </html>
  );
}