import classNames from "classnames";

export function Section({ id, className, children }) {
  return (
    <section id={id} className={classNames(className, "mx-auto relative")}>
      <div>{children}</div>
      <span className="checker absolute" />
    </section>
  );
}