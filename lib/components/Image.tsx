import React from 'react';
import classNames from "classnames";

export interface ImageProps {
  alt?: string;
  url?: string;
  className?: string;
  height?: number;
  width?: number;
  lazy?: 'eager' | 'lazy';
  caption?: string;
}

export function Image(props: ImageProps) {
  const {
    alt = "",
    url,
    className,
    height,
    width,
    lazy,
    caption
  } = props;

  if (!url) return null;

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