import classNames from "classnames";

export function Video(props) {
  const {
    url,
    className,
    displayVideoPlayer
  } = props;

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
