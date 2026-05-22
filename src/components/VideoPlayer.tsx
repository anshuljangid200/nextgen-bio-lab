import { useRef } from "react";
import "./VideoPlayer.css";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video-player__video"
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/assets/main_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        type="button"
        className="video-player__tap-zone"
        onClick={togglePlay}
        aria-label="Play or pause video"
      />
    </div>
  );
}
