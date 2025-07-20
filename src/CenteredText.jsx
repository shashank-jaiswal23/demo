import React from "react";
import Section from "./Section";
import RichText from "./RichText";

const CenteredText = (props) => {
  const { title, text, link, navSlug } = props;
  console.log("props", link);

  return (
    <Section
      id={navSlug}
      className="bg-black text-white" // always black background
    >
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

        {link && (
          <a
            className="text-center mx-auto inline-block"
            title={link.Title}
            href={link.URL}
          >
            {link.Title}
          </a>
        )}
      </div>
    </Section>
  );
};

export default CenteredText;
