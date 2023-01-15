import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { type FC } from "react";

type Props = {
  blok: SbBlokData & {
    name: string;
    nickname: string;
    photo: {
      filename: string;
    };
    description: string;
    role: string;
  };
};

export const BandMember: FC<Props> = ({
  blok,
  blok: { name, nickname, photo, description, role },
}) => {
  return (
    <article
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="flip relative min-h-[500px] w-full max-w-full"
    >
      <div className="flip-content absolute inset-0 transform border shadow-md transition">
        <div className="flip-front absolute inset-0 flex flex-col justify-between bg-white p-4">
          <img
            className="h-full w-full object-cover"
            src={photo.filename}
            alt={name}
          />
          <div className="my-2">
            <h2 className="text-xl">{name}</h2>
            <h3 className="italic text-teal-500">"{nickname}"</h3>
            <h4>{role}</h4>
          </div>
        </div>
        <div className={`flip-back absolute inset-0 bg-white`}>
          <div className="p-4">
            <h2 className="mb-3 text-xl text-teal-500">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
