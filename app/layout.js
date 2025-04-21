import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'
import Header from './sections/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aegis Research Group',
  description: 'Cybersecurity and Intelligence Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#413a29] text-white min-h-screen`}>
        <Navbar />
      
        {children}
      </body>
    </html>
  );
}
