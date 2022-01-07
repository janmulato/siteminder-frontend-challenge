import { Movie } from "./movie";

export interface MovieResults {
  Search?: Array<Movie>;
  totalResults?: number;
  Error?: string;
  Response?: string;
  totalPage?: number;
}
