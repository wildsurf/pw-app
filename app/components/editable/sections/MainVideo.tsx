import { useRef, type FC } from "react";
import { type SbBlokData, storyblokEditable } from "@storyblok/react";

type Props = {
  blok: SbBlokData & {
    source: string;
    type: string;
  };
};

export const MainVideo: FC<Props> = ({ blok, blok: { source, type } }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="absolute inset-0"
      {...storyblokEditable(blok)}
      key={blok?._uid}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      >
        <source src={source} type={type} />
      </video>
      <div className="mix-blend absolute inset-0 bg-[color:rgba(255,255,255,0.2)] " />
    </div>
  );
};
