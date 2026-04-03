import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Frame from './components/Frame';
import Navbar from './components/Navbar';
import WhatsApp from './components/WhatsApp';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '700']
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Import Material Symbols */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${notoSerif.variable} ${plusJakarta.variable} font-body relative min-h-screen`}>
        <Navbar />


        <div className='relative z-10'>
          <Frame />
        </div>

        {children}
        <WhatsApp />
      </body>
    </html>
  );
}