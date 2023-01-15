import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { type FC } from "react";
import { Link } from "react-scroll";

type Props = {
  blok: SbBlokData & {
    links: {
      title: string;
      href: string;
    }[];
  };
};

export const Navigation: FC<Props> = ({ blok, blok: { links } }) => {
  return (
    <div
      className="hidden items-center gap-6 sm:flex"
      {...storyblokEditable(blok)}
    >
      {links.map(({ title, href }) => (
        <Link
          className="cursor-pointer uppercase text-white hover:underline"
          activeClass="active"
          to={`${href}-element`}
          containerId="page"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          key={href}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};
