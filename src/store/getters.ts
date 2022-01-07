import { Movie } from "@/models/movie";
import { State } from "./state";

export default {
  movieList: (state: State): Array<Movie> => {
    return state?.movieResults?.Search || [];
  },

  selectedMovie: (state: State): Movie => {
    return state?.movie || {};
  },
};
