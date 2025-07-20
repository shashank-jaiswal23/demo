export function RichText({ text }) {
  if (!text) return null;

  return (
    <div className="rich-text" dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />
  );
}