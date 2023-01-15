import {
  getStoryblokApi,
  useStoryblokState,
  type ISbStoriesParams,
} from "@storyblok/react";
import { json, type LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { Page } from "~/components/editable/Page";
import { ErrorBoundary as ErrorBoundaryComponent } from "~/components/ErrorBoundary";

const DEFAULT_LANGUAGE = "de";

export const loader: LoaderFunction = async ({ request }) => {
  const language =
    new URL(request.url).searchParams.get("language") ?? DEFAULT_LANGUAGE;

  const sbParams: ISbStoriesParams = {
    version: "draft",
    language,
  };

  const { data } = await getStoryblokApi().get(`cdn/stories/home`, sbParams);

  return json(data?.story);
};

export default function Index() {
  const initialStory = useLoaderData();
  const currentStory = useStoryblokState<any>(initialStory);

  const blok = currentStory.content;

  return <Page blok={blok} language={currentStory.lang} />;
}

export const ErrorBoundary = ErrorBoundaryComponent;
