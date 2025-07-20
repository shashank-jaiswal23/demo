import React, { useMemo } from "react";
import classNames from "classnames";

// SVG Components
const SvgArrow = () => (
  <svg className="inline ml-1" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2787 0.159095L14.3583 3.61591C14.5472 3.82804 14.5472 4.17196 14.3583 4.38409L11.2787 7.8409C11.0897 8.05303 10.7833 8.05303 10.5943 7.8409C10.4054 7.62878 10.4054 7.28485 10.5943 7.07272L12.8478 4.54319H0.5V3.45681H12.8478L10.5943 0.927276C10.4054 0.715149 10.4054 0.371223 10.5943 0.159095C10.7833 -0.0530318 11.0897 -0.0530318 11.2787 0.159095Z"
      fill="currentColor"
    />
  </svg>
);

const SvgArrowDown = () => (
  <svg className="inline ml-1 mb-1" width="13" height="14" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.8409 8.27869L4.38409 11.3583C4.17196 11.5472 3.82804 11.5472 3.61591 11.3583L0.159095 8.27869C-0.0530323 8.08971 -0.0530322 7.78331 0.159095 7.59433C0.371223 7.40536 0.71515 7.40536 0.927277 7.59433L3.45681 9.84783L3.45681 0.5L4.54319 0.5L4.54319 9.84783L7.07272 7.59433C7.28485 7.40536 7.62878 7.40536 7.8409 7.59433C8.05303 7.78331 8.05303 8.08971 7.8409 8.27869Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
  </svg>
);

// Text Variants
export function LinkWithPlus({ title }: { title: string }) {
  return (
    <span className="flex items-center font-label leading-none px-2 pt-2 pb-2 border hover:opacity-50 transition-opacity duration-300">
      {title}
    </span>
  );
}

export function LinkWithDownArrow({ title }: { title: string }) {
  return (
    <span className="flex items-center font-label leading-none px-2 pt-2 pb-2 border hover:opacity-50 transition-opacity duration-300">
      {title} <SvgArrowDown />
    </span>
  );
}

export function LinkWithArrow({ title }: { title: string }) {
  return (
    <span className="flex items-center font-label leading-none px-2 pt-2 pb-2 border mt-2 hover:opacity-50 transition-opacity duration-300">
      {title} <SvgArrow />
    </span>
  );
}

// Core Link Components
export interface InternalLinkProps {
  href?: string;
  children?: React.ReactNode;
  title?: string | { value: string };
  className?: string;
  onClick?: () => void;
}

export function InternalLink(props: InternalLinkProps) {
  const { href = "/", children, title, className, onClick } = props;
  const safeTitle = typeof title === "string" ? title : title?.value;

  return (
    <a href={href} className={classNames("", className)} onClick={onClick}>
      {children ? children : <LinkWithArrow title={safeTitle || ""} />}
    </a>
  );
}

export interface ExternalLinkProps {
  href?: string;
  target?: string;
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export function ExternalLink(props: ExternalLinkProps) {
  const { href, target = "_blank", children, title, className } = props;

  return (
    <a
      className={classNames("", className)}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      {children ? children : <LinkWithArrow title={title || ""} />}
    </a>
  );
}

export interface LinkProps {
  href?: string;
  title?: string | { value: string; sheetUrl?: string };
  className?: string;
  children?: React.ReactNode;
}

export function Link(props: LinkProps) {
  const targetIsExternal = useMemo(() => props.href?.includes("http"), [props.href]);

  const relativeHref = useMemo(() => {
    const regex = /https?:\/\/(?:www\.)?condenast\.com\/(.*)/g;
    return props.href?.replace(regex, "$1") || props.href || "/";
  }, [props.href]);

  if (props?.title && typeof props.title === "object" && props.title.value) {
    return (
      <div>
        <a href={relativeHref} target="_blank" rel="noopener noreferrer" className="inline-block">
          <LinkWithArrow title={props.title.value} />
        </a>
        <span
          className="ml-2 text-xs cursor-pointer editable"
          onClick={() => {
            if (props.title && typeof props.title === "object" && props.title.sheetUrl) {
              window.open(props.title.sheetUrl, "sheet");
            }
          }}
        >
          Translate
        </span>
      </div>
    );
  }

  return <>{targetIsExternal ? <ExternalLink {...props} /> : <InternalLink {...props} />}</>;
}