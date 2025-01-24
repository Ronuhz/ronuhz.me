import React from 'react';

type PolicyParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export function PolicyParagraph({ children, className = '' }: PolicyParagraphProps) {
  return (
    <p className={`text-gruvbox-fg/80 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}