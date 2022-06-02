import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout" dir='rtl'>
      {children}
    </div>
  )
}
