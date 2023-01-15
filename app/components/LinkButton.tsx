import { type FC } from "react";

type Props = {
  link: string;
  label: string;
  icon: string;
};

export const LinkButton: FC<Props> = ({ link, label, icon }) => {
  return (
    <div className="react-add-to-calendar block">
      <a
        className="react-add-to-calendar__button"
        target="blank"
        rel="noopener noreferrer nofollow"
        href={link}
      >
        <span>
          <i className={`react-add-to-calendar__icon--left fa ${icon}`}></i>{" "}
          {label}
        </span>
      </a>
    </div>
  );
};
