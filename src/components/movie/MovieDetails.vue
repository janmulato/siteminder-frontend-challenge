<template>
  <v-container class="movie-details" :fill-height="!title">
    <v-row fill-height v-if="!title">
      <v-col>
        <h2 class="no-title">Please select a title from the sidebar</h2>
      </v-col>
    </v-row>
    <v-container v-else>
      <v-row fill-height>
        <v-col cols="12" class="header">
          <div>
            <h1 class="title">{{ title }}</h1>
            <h2>({{ year }})</h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="info">
        <v-col cols="12" md="6" lg="2">
          <v-row class="poster">
            <v-col cols="12">
              <v-img :src="poster"></v-img>
            </v-col>
            <v-col class="banner" cols="6">
              <div>
                <p class="label font-weight-bold">Language</p>
                <p
                  class="details"
                  v-for="language in languages"
                  :key="language"
                >
                  {{ language }}
                </p>
              </div>
            </v-col>
            <v-col class="banner" cols="6">
              <div>
                <p class="label font-weight-bold">Duration</p>
                <p class="details">{{ duration }}</p>
              </div>
            </v-col>
            <v-col class="banner cast" cols="12">
              <div>
                <p class="label font-weight-bold">Cast</p>
                <p class="details" v-for="actor in cast" :key="actor">
                  {{ actor }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="plot">
            <v-col cols="12">
              <h2 class="synopsis">Synopsis</h2>
              <p v-html="plot"></p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Movie } from "@/models/Movie";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MovieDetails extends Vue {
  @Prop() private movie!: Movie;

  get title(): string {
    return this.movie?.Title || "";
  }

  get year(): string {
    return this.movie?.Year || "";
  }

  get poster(): string {
    return this.movie?.Poster || "";
  }

  get plot(): string {
    return this.movie?.Plot || "";
  }

  get languages(): Array<string> {
    return this.movie?.Language?.split(",") || [];
  }

  get duration(): string {
    return this.movie?.Runtime || "";
  }
  get cast(): Array<string> {
    return this.movie.Actors?.split(",") || [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";

.movie-details {
  background: #ffffff;
  margin: 0;
  .container {
    padding: 0;
  }

  .no-title {
    color: #b5b5b5;
  }

  .header {
    color: #ffffff;
    background: linear-gradient(0deg, #000000 2.92%, rgba(0, 0, 0, 0.6875) 100%),
      #ffffff;
    height: 300px;
    div {
      padding: 160px 0 0 120px;
      text-align: left;

      .title {
        padding: 0 0 8px 0;
        font-size: 2.125em;
      }
    }
  }

  .info {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      padding: 40px 120px;
    }

    min-height: 500px;
    height: 100%;

    .poster {
      .v-image {
        margin: 0 0 30px 0;
      }
      margin: 0;
    }

    .banner {
      border: 1px solid #c2c2c2;
      text-align: left;
      div {
        padding: 4px 8px;

        .label {
          color: #828282;
          font-weight: bold;
          font-size: 0.75em;
          line-height: 120%;
          text-transform: uppercase;
          padding: 0 0 4px;
        }

        .details {
          color: #000000;
          font-size: 0.875em;
        }
      }
    }

    .plot {
      margin: 0 20px;
      text-align: left;

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        margin: 0 0 0 50px;
      }

      .synopsis {
        line-height: 28.8px;
        padding: 0 0 10px;
      }

      p {
        line-height: 19.2px;
      }
    }
  }
}
</style>
