import React from 'react';
import { Image } from "./Image";
import { Video } from "./Video";

export interface FileProps {
  className?: string;
  displayVideoPlayer?: boolean;
  data?: {
    id?: number;
    attributes?: {
      url?: string;
      mime?: string;
      width?: number;
      height?: number;
      [key: string]: any;
    };
  };
  type?: string;
}

export function File({ className, displayVideoPlayer, data, type }: FileProps) {
  if (!data?.attributes) return null;

  return (
    <>
      {type?.toUpperCase() === "IMAGE" && <Image alt="" className={className} {...data.attributes} />}
      {type?.toUpperCase() === "VIDEO" && <Video displayVideoPlayer={displayVideoPlayer} className={className} {...data.attributes} />}
      {data.attributes.mime?.includes("video") && <Video displayVideoPlayer={displayVideoPlayer} className={className} {...data.attributes} />}
      {data.attributes.mime?.includes("image") && <Image alt="" className={className} {...data.attributes} />}
    </>
  );
}