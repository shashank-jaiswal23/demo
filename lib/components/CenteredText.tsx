import React from 'react';
import { Link } from './Link';
import { Section } from './Section';
import { RichText } from './RichText';

export function CenteredText(props) {
  const { title, text, link, colorTheme, navSlug } = props;

  return (
    <Section id={navSlug} className={colorTheme === "Black" ? "bg-black text-white" : ""}>
      <div className="mx-auto max-w-sm py-32 px-4 md:px-6">
        {title && <h2>{title}</h2>}

        {typeof text === "string" && <RichText text={text} />}

        {text?.value && (
          <a
            className="editable block relative"
            onClick={() => {
              window.open(text.sheetUrl, "sheet");
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RichText text={text.value} />
          </a>
        )}
        
        {link && <Link className="text-center mx-auto inline-block" title={link.Title} href={link.URL} />}
      </div>
    </Section>
  );
}