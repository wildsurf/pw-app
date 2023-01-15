import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { type FC } from "react";
import { Link } from "react-scroll";

type Props = {
  blok: SbBlokData & {
    href: string;
  };
};

export const ScrollButton: FC<Props> = ({ blok, blok: { href } }) => {
  return (
    <span className="absolute bottom-8 flex w-full items-center justify-center">
      <Link
        className="flex h-10 w-10 animate-bounce cursor-pointer items-center justify-center rounded-full border-2"
        activeClass="active"
        to={`${href}-element`}
        containerId="page"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        {...storyblokEditable(blok)}
      >
        <FontAwesomeIcon icon={faArrowDown} color="white" size="1x" />
      </Link>
    </span>
  );
};
