import React from 'react';
import classNames from "classnames";

export interface VideoProps {
  url?: string;
  className?: string;
  displayVideoPlayer?: boolean;
}

export function Video(props: VideoProps) {
  const {
    url,
    className,
    displayVideoPlayer
  } = props;

  if (!url) return null;

  return (
    <video
      className={classNames(className)}
      src={url}
      controls={displayVideoPlayer}
      autoPlay={!displayVideoPlayer}
      playsInline
      muted
      loop
    />
  );
}