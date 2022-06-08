import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="" dir='rtl'>
      <Header />
      {children}
    </div>
  )
}
