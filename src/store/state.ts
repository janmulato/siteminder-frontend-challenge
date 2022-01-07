import { Movie } from "@/models/movie";
import { MovieResults } from "@/models/MovieResults";

export interface State {
  movieResults: MovieResults;
  movie: Movie;
}

export const state: State = {
  movieResults: {},
  movie: {},
}

export default state;
