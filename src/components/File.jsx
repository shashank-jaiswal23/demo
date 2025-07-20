import { Image } from "./Image";
import { Video } from "./Video";

export function File({ className, displayVideoPlayer, data, type }) {
  return (
    <>
      {type?.toUpperCase() === "IMAGE" && <Image alt="" className={className} {...data?.attributes} />}
      {type?.toUpperCase() === "VIDEO" && <Video displayVideoPlayer={displayVideoPlayer} className={className} {...data?.attributes} />}
      {data?.attributes?.mime?.includes("video") && <Video displayVideoPlayer={displayVideoPlayer} className={className} {...data?.attributes} />}
      {data?.attributes?.mime?.includes("image") && <Image alt="" className={className} {...data?.attributes} />}
    </>
  );
}