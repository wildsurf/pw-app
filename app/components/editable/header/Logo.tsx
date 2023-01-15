import { type SbBlokData, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";

type Props = {
  image: {
    alt: string;
    filename: string;
  };
};

export const Logo = ({
  blok,
  blok: { image },
}: {
  blok: SbBlokData & Props;
}) => {
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const main = document.querySelector("main");
    const listener = () => setShrink(main?.scrollTop !== 0);
    main?.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <img
      {...storyblokEditable(blok)}
      src={image.filename}
      alt={image.alt}
      className={`absolute left-2 ${shrink ? "top-1" : "top-2"} ${
        shrink ? "h-8" : "h-20"
      } ${
        shrink ? "w-8" : "w-20"
      } rounded-full border-2 bg-white transition-all`}
    />
  );
};
