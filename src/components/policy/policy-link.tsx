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
      className="text-gruvbox-bright-green hover:text-gruvbox-green transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}