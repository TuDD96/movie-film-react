import { Episodes, Movie } from "../../Models/Movie";

export interface ApiResponse {
  item: Movie;
  params: any;
  seoOnPage: any;
  type_list: string;
  episodes: Episodes;
}
