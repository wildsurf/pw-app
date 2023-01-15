import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { type FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";

type Props = {
  blok: SbBlokData & {
    title: string;
    subtitle?: string;
  };
};

export const Heading: FC<Props> = ({ blok, blok: { title, subtitle } }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <ScrollAnimation
        animateIn="custom-animation-fade-in-up"
        scrollableParentSelector=".scroll-container"
      >
        <h1 className="text-5xl uppercase lg:drop-shadow-md">{title}</h1>
        {subtitle && (
          <h2 className="text-2xl uppercase lg:drop-shadow-md">{subtitle}</h2>
        )}
      </ScrollAnimation>
    </div>
  );
};
