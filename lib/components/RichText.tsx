import React from 'react';

export function RichText({ text, className }) {
  if (!text) return null;

  return (
    <div 
      className={className ? `rich-text ${className}` : "rich-text"} 
      dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} 
    />
  );
}