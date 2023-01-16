import {
  type ISbRichtext,
  storyblokEditable,
  RichTextResolver,
  type SbBlokData,
} from "@storyblok/react";
import { type FC } from "react";

type Props = {
  blok: SbBlokData & {
    title: string;
    body: ISbRichtext;
    image: {
      filename: string;
      alt: string;
    };
  };
};

const resolver = new RichTextResolver();

export const Textblock: FC<Props> = ({
  blok,
  blok: { title, body, image },
}) => {
  const markup = resolver.render(body);
  return (
    <article {...storyblokEditable(blok)} className="flex items-center">
      <h1>{title}</h1>
      <div className="richtext" dangerouslySetInnerHTML={{ __html: markup }} />
    </article>
  );
};
