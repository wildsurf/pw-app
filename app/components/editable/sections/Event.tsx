import {
  RichTextResolver,
  storyblokEditable,
  type ISbRichtext,
  type SbBlokData,
} from "@storyblok/react";
import { type FC } from "react";
import AddToCalendar from "react-add-to-calendar";
import { ptBR, enGB, de } from "date-fns/locale";
import { formatWithOptions } from "date-fns/fp";
import { LinkButton } from "../../LinkButton";

type Props = {
  language: string;
  blok: SbBlokData & {
    flyer: string;
    startDateTime: string;
    endDateTime: string;
    name: string;
    url: string;
    googleLink: string;
    image: {
      filename: string;
    };
    description: ISbRichtext;
    mapLinkLabel: string;
    calendarButtonLabel: string;
    downloadFlyerLabel: string;
  };
};

const resolver = new RichTextResolver();

const localeMap: Record<string, Locale> = {
  en: enGB,
  de: de,
  "pt-br": ptBR,
};

const convertStoryblokDate = (date: string): Date => {
  try {
    return new Date(`${date.replace(" ", "T")}+0000`);
  } catch (error) {
    return new Date();
  }
};

export const Event: FC<Props> = ({
  language,
  blok,
  blok: {
    name,
    url,
    googleLink,
    image,
    flyer,
    description,
    startDateTime,
    endDateTime,
    mapLinkLabel,
    calendarButtonLabel,
    downloadFlyerLabel,
  },
}) => {
  const markup = description ? resolver.render(description) : "";
  const convertedStartDate = convertStoryblokDate(startDateTime);
  const convertedEndDate = convertStoryblokDate(endDateTime);
  const date = formatWithOptions(
    { locale: localeMap[language] },
    "dd MMMM yyyy"
  )(convertedStartDate);

  const event = {
    title: `Gig: Palheta Was? @ ${name}`,
    description: markup?.replace(/(<([^>]+)>)/gi, " ") ?? "", // some calendars don't allow markup
    location: googleLink,
    startTime: convertedStartDate,
    endTime: convertedEndDate,
  };

  return (
    <div
      className="relative bg-white pb-5 shadow-xl ring-1 ring-gray-900/5"
      {...storyblokEditable(blok)}
    >
      <div className="bg-gradient-to-b from-red-700 to-red-500 p-4 text-xl font-bold text-white">
        <h1>
          <>
            {date} @
            <a
              className="underline hover:no-underline"
              href={url}
              rel="noopener noreferrer nofollow"
              target="blank"
            >
              {name}
            </a>
          </>
        </h1>
      </div>

      <div className="flex justify-center bg-slate-100 pt-[1px]">
        <img
          className="h-full max-h-[400px] w-full object-cover"
          src={image.filename}
          alt="location"
        />
      </div>

      {description && (
        <div
          className="richtext p-4"
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      )}

      <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-between">
        <LinkButton
          icon="fa-map-marker"
          label={mapLinkLabel}
          link={googleLink}
        />
        <AddToCalendar
          event={event}
          buttonTemplate={{ "calendar-plus-o": "left" }}
          buttonLabel={calendarButtonLabel}
        />
      </div>
    </div>
  );
};
