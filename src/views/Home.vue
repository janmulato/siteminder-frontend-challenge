<template>
  <div class="home">
    <v-container fluid>
      <v-row class="movies">
        <v-col cols="12" md="3" class="list">
          <MovieList></MovieList>
        </v-col>
        <v-col cols="12" md="9" class="details">
          <MovieDetails :movie="selectedMovie"></MovieDetails>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MovieList from "@/components/movie/MovieList.vue"; // @ is an alias to /src
import MovieDetails from "@/components/movie/MovieDetails.vue"; // @ is an alias to /src
import { Movie } from "@/models/Movie";

@Component({
  components: {
    MovieList,
    MovieDetails,
  },
})
export default class Home extends Vue {
  get selectedMovie(): Movie {
    return this.$store.getters.selectedMovie;
  }
}
</script>
<style lang="scss">
.movies {
  height: 100vh;
  .list {
    z-index: 10;
    padding: 0;
  }

  .details {
    padding: 0;
  }
}

.col {
  padding: 0 !important;
}
</style>
