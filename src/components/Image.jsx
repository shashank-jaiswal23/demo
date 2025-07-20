import classNames from "classnames";

export function Image(props) {
  const {
    alt = "",
    url,
    className,
    height,
    width,
    lazy,
    caption
  } = props;

  return (
    <picture>
      <img
        src={url}
        alt={alt}
        className={classNames(className)}
        loading={lazy === "eager" ? "eager" : "lazy"}
        height={height}
        width={width}
      />
      {caption && <sub className="mt-2">{caption}</sub>}
    </picture>
  );
}
