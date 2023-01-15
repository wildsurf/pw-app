import { type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "@remix-run/react";
import { type SbBlokData, storyblokEditable } from "@storyblok/react";

type Props = {
  blok: SbBlokData & {
    languages: {
      locale: string;
      title: string;
    }[];
    defaultLanguage: string;
  };
};

export const LanguagePicker: FC<Props> = ({
  blok,
  blok: { languages, defaultLanguage },
}) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initialLanguage = params.get("language") ?? defaultLanguage;

  const onLanguageChange = (language: string) =>
    navigate(`/?language=${language}`);

  return (
    <div
      className="flex items-center gap-2"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <FontAwesomeIcon icon={faGlobe} color="teal" size="1x" />
      <select
        value={initialLanguage}
        onChange={(event) => onLanguageChange(event.target.value)}
      >
        {languages.map((language) => (
          <option key={language.locale} value={language.locale}>
            {language.title}
          </option>
        ))}
      </select>
    </div>
  );
};
