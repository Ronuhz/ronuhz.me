import React from 'react';

type PolicySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gruvbox-bright-blue">{title}</h2>
      {children}
    </div>
  );
}