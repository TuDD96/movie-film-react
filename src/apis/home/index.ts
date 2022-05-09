import { getRequest } from "../api";
import { API_GET_MOVIE_WITH_SLUG, API_MOVIE_HOME } from "../urls";
import { ApiResponse } from "./types";

export const getMovieHome = async (params: any): Promise<ApiResponse> => {
  const res = await getRequest(API_MOVIE_HOME, params);

  return res?.pageProps?.data!;
};

export const getMovieWithSlugCategory = async ({
  slug,
}: {
  slug: string;
}): Promise<ApiResponse> => {
  const url = `${API_GET_MOVIE_WITH_SLUG}/${slug}`;

  const res = await getRequest(url, {});

  return res?.pageProps?.data!;
};
