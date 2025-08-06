import className from "classnames"


import { Link } from './Link';
import { Section } from './Section';
import { RichText } from './RichText';

export interface CenteredTextProps {
  title?: any;
  text?: any;
  link?: {
    Title: string;
    URL: string;
  };
  navTitle?: string;
  navSlug?: string;
  type?: "CenteredText";
  colorTheme?: "Default" | "Black";
}

export function CenteredText(props: CenteredTextProps) {
	const { title, text, link, colorTheme, navSlug } = props

	return (
		<Section id={navSlug} className={className(
			colorTheme === "Black" && "bg-black text-white"
		)}>
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
	)
}
