import { Movie } from "../../Models/Movie";

export interface Props {}

export interface MovieOfCategory {
  "phim-moi"?: Movie[];
  "phim-bo-dang-chieu"?: Movie[];
  "hoat-hinh"?: Movie[];
  "phim-thuyet-minh"?: Movie[];
  "phim-bo"?: Movie[];
  "phim-le"?: Movie[];
  "tv-shows"?: Movie[];
  "phim-vietsub"?: Movie[];
  "phim-long-tieng"?: Movie[];
  "phim-bo-hoan-thanh"?: Movie[];
  "phim-sap-chieu"?: Movie[];
}
