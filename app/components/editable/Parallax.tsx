import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import ScrollAnimation from "react-animate-on-scroll";
import { type FC } from "react";

type Props = {
  blok: SbBlokData & {
    title: string;
    photo: {
      filename: string;
    };
    viewHeight: string;
    bgColor?: string;
    bgSize?: string;
  };
};

export const Parallax: FC<Props> = ({
  blok,
  blok: { title, photo, viewHeight },
}) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok._uid}
      style={{ transformStyle: "preserve-3d" }}
      className="align-center relative z-[-1] flex h-full justify-center"
    >
      <ScrollAnimation
        offset={0}
        animateIn="custom-animation-fade-in"
        scrollableParentSelector=".scroll-container"
        className="absolute z-[-1] h-full w-full"
        style={{
          transform: "translateZ(-10px) scale(2)",
          backgroundImage: `url("${photo.filename}")`,
          backgroundPosition: "center center",
          backgroundSize: blok.bgSize ?? "cover",
          backgroundColor: blok.bgColor ?? "transparent",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{ transform: "translateZ(-5px) scale(1.5)" }}
        className="absolute flex h-full w-full items-center justify-center"
      >
        <h1 className="bg-black text-5xl uppercase text-white drop-shadow-md">
          {title}
        </h1>
      </div>
    </section>
  );
};
