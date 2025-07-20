import classNames from "classnames";

export function Section({ id, className, children }) {
  return (
    <section id={id} className={classNames(className, "mx-auto relative")}>
      <div>{children}</div>
      <span className="checker absolute" />

      <style jsx>{`
        span {
          top: 100vh;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </section>
  );
}