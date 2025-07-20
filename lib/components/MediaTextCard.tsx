import React from 'react';
import classNames from 'classnames';
import { RichText } from './RichText';
import { Link } from './Link';
import { Section } from './Section';
import { File } from './File';

export interface MediaTextCardProps {
  media?: {
    data?: {
      id?: number;
      attributes?: {
        url?: string;
        mime?: string;
        width?: number;
        height?: number;
        formats?: any;
        [key: string]: any;
      };
    };
  };
  title?: string | { value: string; sheetUrl?: string };
  text?: string | { value: string; sheetUrl?: string };
  link?: {
    Title: string;
    URL: string;
  };
  layout?: 'Left' | 'Right';
  size?: 'Small' | 'Medium' | 'Large' | 'Full' | 'Padding';
  margin?: 'None' | 'Regular' | 'Large';
  displaySeperator?: boolean;
  navSlug?: string;
  colorTheme?: 'Default' | 'Grey' | 'Black' | 'Blur';
  className?: string;
}

export function MediaTextCard(props: MediaTextCardProps) {
  const {
    media,
    title,
    text,
    link,
    layout = 'Left',
    size = 'Medium',
    margin = 'Regular',
    displaySeperator,
    navSlug,
    colorTheme = 'Default',
    className
  } = props;

  return (
    <>
      {size === "Medium" && <div className="hr" />}
      <Section
        id={navSlug}
        className={classNames(
          "relative overflow-hidden",
          margin !== "None" && "my-8 md:my-16",
          colorTheme === "Grey" && "bg-dark-grey text-white",
          colorTheme === "Black" && "bg-black text-white",
          colorTheme === "Blur" && "bg-black text-white",
          size === "Padding" && "md:px-6",
          className
        )}
      >
        <div
          className={classNames(
            "flex flex-wrap items-center mx-auto",
            size === "Medium" && "max-w-md px-4 md:px-6"
          )}
        >
          {colorTheme === "Blur" && media && (
            <File
              className="hidden md:block h-full w-full filter blur-lg opacity-50 absolute top-0 left-0 object-top transform-gpu object-cover scale-max"
              {...media}
            />
          )}

          {media && (
            <div
              className={classNames(
                "relative mb-8 md:mb-0",
                size === "Medium" ? "w-full md:w-7/12" : "w-full md:w-6/12",
                size === "Padding" && "py-0",
                layout === "Right" && "mb-8 md:mb-0"
              )}
            >
              <File {...media} />
            </div>
          )}

          <div
            className={classNames(
              "relative max-w-sm",
              layout === "Right" ? "md:order-first md:pr-16" : "md:pl-16",
              size === "Medium" ? "md:w-5/12" : "md:w-6/12",
              size === "Padding" && "px-4 pb-12 md:pb-0",
              size === "Full" && "px-4 pb-12 pt-12 md:pb-12",
              size !== "Medium" && "max-w-titles",
              layout !== "Right" && size !== "Medium" && "md:pr-16"
            )}
          >
            {typeof title === "string" && <h2>{title}</h2>}
            {title && typeof title === "object" && title.value && (
              <a
                className="editable block relative"
                onClick={() => title.sheetUrl && window.open(title.sheetUrl, "sheet")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{title.value}</h2>
              </a>
            )}

            {typeof text === "string" && <RichText text={text} />}
            {text && typeof text === "object" && text.value && (
              <a
                className="editable block relative"
                onClick={() => text.sheetUrl && window.open(text.sheetUrl, "sheet")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RichText text={text.value} />
              </a>
            )}

            {link && (
              <div className="inline-block">
                <Link title={link.Title} href={link.URL} />
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}