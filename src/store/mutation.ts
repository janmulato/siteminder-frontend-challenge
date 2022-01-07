import { State } from "./state";
import { MutationTree } from "vuex";
import { MovieResults } from "@/models/MovieResults";
import { Movie } from "@/models/movie";

export enum MutationTypes {
  SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS",
  SET_MOVIE = "SET_MOVIE",
}

export type Mutations<S = State> = {
  [MutationTypes.SET_SEARCH_RESULTS](state: S, payload: MovieResults): void;
  [MutationTypes.SET_MOVIE](state: S, payload: Movie): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_SEARCH_RESULTS](state, payload: MovieResults) {
    state.movieResults = payload;
  },
  [MutationTypes.SET_MOVIE](state, payload: Movie) {
    state.movie = payload;
  },
};

export default mutations;
