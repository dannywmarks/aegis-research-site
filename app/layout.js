import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aegis Research Group',
  description: 'Cybersecurity and Intelligence Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
