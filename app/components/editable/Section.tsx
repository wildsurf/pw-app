import {
  storyblokEditable,
  StoryblokComponent,
  type SbBlokData,
} from "@storyblok/react";
import { type ReactNode, type FC } from "react";
import { Element } from "react-scroll";

type Props = {
  language: string;
  blok: SbBlokData & {
    name: string;
    body: SbBlokData[];
    fullHeight: boolean;
    fullWidth: boolean;
  };
};

const Wrapper: FC<{
  children?: ReactNode;
  fullWidth: boolean;
  fullHeight: boolean;
}> = ({ fullWidth, fullHeight, children }) => {
  if (fullWidth) {
    return (
      <div className={fullHeight ? `h-full w-full` : "w-full"}>{children}</div>
    );
  }
  return (
    <div className="relative mx-auto my-8 w-full max-w-6xl px-4 sm:px-8">
      {children}
    </div>
  );
};

export const Section: FC<Props> = ({ blok, language }) => {
  return (
    <Element name={`${blok.name}-element`}>
      <section
        id={blok.name}
        className={`relative flex items-center justify-center bg-white ${
          blok.fullHeight ? "min-h-screen" : ""
        }`}
        {...storyblokEditable(blok)}
        key={blok._uid}
      >
        <Wrapper fullWidth={blok.fullWidth} fullHeight={blok.fullHeight}>
          {blok?.body?.map((nestedBlok: SbBlokData) => (
            <StoryblokComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              language={language}
            />
          ))}
        </Wrapper>
      </section>
    </Element>
  );
};
