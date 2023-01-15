import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { type FC } from "react";
import { LinkButton } from "~/components/LinkButton";

type Props = {
  blok: SbBlokData & {
    link: string;
    label: string;
    icon: string;
  };
};

export const IconLinkButton: FC<Props> = ({
  blok,
  blok: { link, label, icon },
}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <LinkButton link={link} label={label} icon={icon} />
    </div>
  );
};
