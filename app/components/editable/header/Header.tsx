import { type FC } from "react";
import {
  type SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";

type Props = {
  blok: SbBlokData & {
    area: SbBlokData[];
  };
};

export const Header: FC<Props> = ({ blok }) => (
  <header
    {...storyblokEditable(blok)}
    key={blok._uid}
    className="absolute top-0 z-50 w-screen bg-zinc-800"
  >
    <div className="align-center relative mx-auto flex max-w-6xl items-center justify-end gap-6 p-2">
      {blok.area.map((blok) => (
        <StoryblokComponent key={blok._uid} blok={blok} />
      ))}
    </div>
  </header>
);
