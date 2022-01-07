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
      ></v-text-field>
    </v-row>
    <v-row>
      <MovieCard></MovieCard>
    </v-row>
    <v-row>
      <MovieCard></MovieCard>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MovieCard from "@/components/movie/MovieCard.vue"; // @ is an alias to /src

@Component({
  components: {
    MovieCard,
  },
})
export default class MovieList extends Vue {
  @Prop() private msg!: string;

  private search = "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.movie-list {
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  padding: 0 15px 0 0;
  height: 100%;
}

.search {
  border-bottom: 1px solid #004ec4;
  padding: 40px 32px 32px;

  .search-bar {
    border-radius: 8px;
    & fieldset {
      border: 2px solid #005fcc !important;
      border-bottom-color: rgba(0, 0, 0, 0.38) !important;
    }
  }
}
</style>
