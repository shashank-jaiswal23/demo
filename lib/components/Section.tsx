import React from 'react';
import classNames from 'classnames';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={classNames(className, "mx-auto relative")}>
      <div>{children}</div>
      <span className="checker absolute" />
    </section>
  );
}