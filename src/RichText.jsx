import React from "react";

export default function RichText({ text }: { text: string }) {
	if (!text) return null

	return (
		<div className="rich-text" dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
	)
}