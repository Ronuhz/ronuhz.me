import React from 'react';
import Link from 'next/link';

type PolicyLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function PolicyLink({ href, children }: PolicyLinkProps) {
   return (
    <Link 
      href={href}
      className="underline decoration-[var(--accent)] decoration-2 underline-offset-2 hover:decoration-4"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}