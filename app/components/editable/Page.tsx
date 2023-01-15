import {
  storyblokEditable,
  StoryblokComponent,
  type SbBlokData,
} from "@storyblok/react";
import { type FC } from "react";

type Props = {
  language: string;
  blok: SbBlokData & {
    body: SbBlokData[];
  };
};

export const Page: FC<Props> = ({ blok, language }) => {
  const header = blok?.body?.find((c) => c.component === "header");
  const otherComponents = blok?.body?.filter((c) => c.component !== "header");

  return (
    <>
      <StoryblokComponent blok={header} key={header?._uid} />
      <main
        {...storyblokEditable(blok)}
        key={blok._uid}
        className="scroll-container h-screen overflow-x-hidden overflow-y-scroll"
        style={{ perspective: 10 }}
        id="page"
      >
        {otherComponents?.map((nestedBlok: SbBlokData) => (
          <StoryblokComponent
            blok={nestedBlok}
            language={language}
            key={nestedBlok._uid}
          />
        ))}
      </main>
    </>
  );
};
