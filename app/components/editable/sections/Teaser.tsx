import { type SbBlokData, storyblokEditable } from "@storyblok/react";

type Props = {
  headline: string;
};

export const Teaser = ({ blok }: { blok: SbBlokData & Props }) => {
  return (
    <h1 className="custom-animation-fade-in-up block text-center font-extrabold uppercase drop-shadow-md">
      <span className="text-6xl tracking-tight text-teal-500 lg:text-9xl lg:drop-shadow-[3px_2px_0_black]">
        Palheta Was?
      </span>
      <span
        {...storyblokEditable(blok)}
        key={blok?._uid}
        className="text-md block text-2xl text-white lg:text-4xl"
      >
        {blok?.headline}
      </span>
    </h1>
  );
};
