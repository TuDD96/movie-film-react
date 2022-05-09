import { Movie } from "../../Models/Movie";

export interface CheckVersion {
  code: string;
  os: string;
}

export interface ApiResponse {
  items: Movie[];
  params: any;
  seoOnPage: any;
  type_list: string;
}
