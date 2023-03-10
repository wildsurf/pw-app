import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import globalStylesheetUrl from "./styles/global.css";
import reactAddToCalendarUrl from "react-add-to-calendar/dist/react-add-to-calendar.css";
import { getUser } from "./session.server";
import { components } from "./storyblok";
import { STORYBLOK_ACCESS_TOKEN } from "./config";

storyblokInit({
  accessToken: STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: reactAddToCalendarUrl },
    { rel: "stylesheet", href: globalStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Palheta Was? - Rock Cover Band",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
