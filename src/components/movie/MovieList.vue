<template>
  <v-container class="full-height movie-list">
    <v-row class="search">
      <v-text-field
        clearable
        outlined
        class="search-bar"
        placeholder="Search here"
        :append-icon="search ? undefined : 'mdi-magnify'"
        v-model="search"
        color="blue"
      ></v-text-field>
    </v-row>
    <v-row v-if="!movies.length">
      <v-col cols="12">
        <h3 class="no-result">No Results Found</h3>
      </v-col>
    </v-row>
    <v-row v-else class="list">
      <v-col cols="12" v-for="movie in movies" :key="movie.imdbID">
        <MovieCard
          :active="movie.imdbID === selectedMovieId"
          @click.native="selectMovie(movie)"
          :movie="movie"
        ></MovieCard>
      </v-col>
    </v-row>
    <v-row v-if="movies.length">
      <Pagination
        :page.sync="page"
        :totalPage="totalPage"
        class="pagination"
      ></Pagination>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MovieCard from "@/components/movie/MovieCard.vue"; // @ is an alias to /src
import Pagination from "@/components/common/Pagination.vue"; // @ is an alias to /src
import { ActionTypes } from "@/store/actions";
import { Movie } from "@/models/movie";
import { Debounce } from "vue-debounce-decorator";

@Component({
  components: {
    MovieCard,
    Pagination,
  },
})
export default class MovieList extends Vue {
  private search = "";
  private page = 1;
  private type = "movie";
  private movie: Movie = {};

  get movies(): Array<Movie> {
    return this.$store.getters?.movieList;
  }

  get totalPage(): number {
    return this.$store.state.movieResults?.totalPage || 0;
  }

  get selectedMovie(): Movie {
    return this.$store.getters?.selectedMovie;
  }

  get selectedMovieId(): string {
    return this.movie?.imdbID || "";
  }

  @Watch("search")
  @Debounce(1000)
  onSearchDebounce(): void {
    this.page = 1;
    this.searchMovie();
  }

  @Watch("page") onChangePage(): void {
    this.searchMovie();
  }

  public searchMovie(): void {
    this.$store.dispatch(ActionTypes.SEARCH_MOVIE, {
      s: this.search,
      page: this.page,
      type: this.type,
    });
  }

  public selectMovie(movie: Movie): void {
    this.movie = movie;
    this.$store.dispatch(ActionTypes.GET_MOVIE, {
      i: movie.imdbID,
      plot: "full",
    });
  }

  mounted(): void {
    this.searchMovie();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.movie-list {
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;

  .list {
    margin: 12px -12px 60px;
    overflow: auto;
    max-height: 100vh;
  }

  .pagination {
    bottom: 0;
    box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
    left: 0;
    min-height: 60px;
    position: absolute;
  }

  .no-result {
    color: #b5b5b5;
    padding: 10px;
  }

  .search {
    border-bottom: 1px solid #004ec4;
    padding: 40px 32px 32px;

    .search-bar {
      border-radius: 8px;
    }
  }
}
</style>
