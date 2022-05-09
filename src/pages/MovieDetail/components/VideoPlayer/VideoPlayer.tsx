import { useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import { Props } from "./types";

const VideoPlayer = (props: Props) => {
  const { episodes, linkCurrent } = props;

  useEffect(() => {}, [episodes]);

  return (
    <div className="col-12 col-xl-12">
      <ReactHlsPlayer
        src={linkCurrent}
        autoPlay={true}
        controls={true}
        width="100%"
        height="auto"
        hlsConfig={{
          autoStartLoad: true,
          startPosition: -1,
          debug: false,
        }}
      />
    </div>
  );
};

export default VideoPlayer;
