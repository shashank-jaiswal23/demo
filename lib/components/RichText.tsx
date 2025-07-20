import React from 'react';

export interface RichTextProps {
  text: string;
  className?: string;
}

export function RichText({ text, className }: RichTextProps) {
  if (!text) return null;

  return (
    <div 
      className={className ? `rich-text ${className}` : "rich-text"} 
      dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} 
    />
  );
}