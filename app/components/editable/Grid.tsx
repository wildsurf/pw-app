import {
  StoryblokComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react";
import { type FC } from "react";

type Props = {
  language: string;
  blok: SbBlokData & {
    body: SbBlokData[];
    maxGrid?: number;
  };
};

export const Grid: FC<Props> = ({ blok, language }) => {
  return (
    <div
      className={`my-8 grid grid-cols-1 gap-4 first:mt-0 last:mb-0 sm:grid-cols-${
        blok.maxGrid && blok.maxGrid > 2 ? 2 : blok.maxGrid ?? 2
      } lg:grid-cols-${blok.maxGrid ?? 3}`}
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      {blok?.body?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          language={language}
        />
      ))}
      <div className="lg:grid-cols-2 lg:grid-cols-3" />
    </div>
  );
};
