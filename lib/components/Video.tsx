import React from 'react';

export function Video(props) {
  const {
    url,
    className,
    displayVideoPlayer
  } = props;

  if (!url) return null;

  return (
    <video
      className={className}
      src={url}
      controls={displayVideoPlayer}
      autoPlay={!displayVideoPlayer}
      playsInline
      muted
      loop
    />
  );
}