import type { ReactNode } from 'react';
import Navbar from './Navbar';
import SmoothScroll from '../common/SmoothScroll';
import CustomCursor from '../common/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="main-content" style={{ backgroundColor: 'var(--color-bg)'}}>
        {children}
      </main>
      <CustomCursor />
    </SmoothScroll>
  );
}
