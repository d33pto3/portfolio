import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from '../common/SmoothScroll';
import CustomCursor from '../common/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
