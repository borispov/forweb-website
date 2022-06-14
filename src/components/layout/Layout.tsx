import * as React from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" dir='rtl'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
