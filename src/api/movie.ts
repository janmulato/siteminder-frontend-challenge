import { Movie } from "@/models/movie";
import { MovieResults } from "@/models/MovieResults";
import client from "@/plugins/axios";
import { MovieSearchParam } from "@/store/actions";

export default {
  searchMovie(payload: MovieSearchParam): Promise<MovieResults> {
    return client
      .get("", {
        params: payload,
      })
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },

  getMovieById(payload: MovieSearchParam): Promise<Movie> {
    return client
      .get("", {
        params: payload,
      })
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
