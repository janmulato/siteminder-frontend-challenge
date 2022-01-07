import { MutationTypes } from "./mutation";
import { MovieResults } from "@/models/MovieResults";
import movie from "@/api/movie";
import { Movie } from "@/models/movie";
import movie from "@/api/movie";

export enum ActionTypes {
  SEARCH_MOVIE = "SEARCH_MOVIE",
  GET_MOVIE = "GET_MOVIE",
}

const PAGE_SIZE = 10; //DEFAULT PAGE SIZE OF OMDBAPI

export type MovieSearchParam = {
  s?: string;
  page?: string | number;
  type?: string;
  i: string;
  plot: string;
};

export default {
  async [ActionTypes.SEARCH_MOVIE](
    { commit },
    payload: MovieSearchParam
  ): Promise<MovieResults> {
    const movieResults = await movie.searchMovie(payload);
    let result: MovieResults = {
      ...movieResults,
    };

    if (movieResults.Response === "False") {
      result = {
        Search: [],
        totalResults: 0,
      };
    }

    result.totalPage =
      (result?.totalResults ?? 0) > PAGE_SIZE
        ? Math.ceil((result?.totalResults ?? 0) / PAGE_SIZE)
        : 0;

    commit(MutationTypes.SET_SEARCH_RESULTS, result);

    return movieResults;
  },

  async [ActionTypes.GET_MOVIE](
    { commit },
    payload: MovieSearchParam
  ): Promise<Movie> {
    const response = await movie.getMovieById(payload);
    let res: Movie = {
      ...response,
    };

    if (response.Response === "False") {
      res = {} as Movie;
    }

    commit(MutationTypes.SET_MOVIE, res);

    return res;
  }
};
