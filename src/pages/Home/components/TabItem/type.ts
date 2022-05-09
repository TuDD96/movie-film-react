import { Movie } from "../../../../Models/Movie";
import { MovieOfCategory } from "../../types";

export interface Props {
  movies: Movie[];
  active: boolean;
  index: number;
}
