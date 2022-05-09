import { getRequest } from "../api";
import { API_GET_MOVIE_DETAIL } from "../urls";
import { ApiResponse } from "./types";

export const getMovieDetail = async ({
  slug,
}: {
  slug: string;
}): Promise<ApiResponse> => {
  const url = `${API_GET_MOVIE_DETAIL}/${slug}`;

  const res = await getRequest(url, {});

  return res?.pageProps?.data!;
};
