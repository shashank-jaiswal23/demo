import React from 'react';

function combineClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Section({ id, className, children }) {
  return (
    <section id={id} className={combineClasses(className, "mx-auto relative")}>
      <div>{children}</div>
      <span className="checker absolute" />
    </section>
  );
}