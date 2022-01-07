<template>
  <v-container class="movie-details">
    <!-- <v-row fill-height>
      <v-col>
        <h2 class="no-title">Please select a title from the sidebar</h2>
      </v-col>
    </v-row> -->
    <v-row fill-height>
      <v-col cols="12" class="header">
        <div>
          <h1 class="title">Movie Title</h1>
          <h2>(Year)</h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="info">
      <v-col cols="2">
        <v-row class="poster">
          <v-col cols="12">
            <v-img
              src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            ></v-img>
          </v-col>
          <v-col class="banner" cols="6">
            <div>
              <p class="label font-weight-bold">Language</p>
              <p class="details">English</p>
            </div>
          </v-col>
          <v-col class="banner" cols="6">
            <div>
              <p class="label font-weight-bold">Duration</p>
              <p class="details">120 mins</p>
            </div>
          </v-col>
          <v-col class="banner cast" cols="12">
            <div>
              <p class="label font-weight-bold">Cast</p>
              <p class="details">Tom Cruise</p>
              <p class="details">Tom Cruise</p>
              <p class="details">Tom Cruise</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row class="plot">
          <v-col cols="12">
            <h2 class="synopsis">Synopsis</h2>
            <p>
              After saving Xandar from Ronan's wrath, the Guardians are now
              recognized as heroes. Now the team must help their leader Star
              Lord (Chris Pratt) uncover the truth behind his true heritage.
              Along the way, old foes turn to allies and betrayal is blooming.
              And the Guardians find that they are up against a devastating new
              menace who is out to rule the galaxy.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MovieDetails extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.movie-details {
  background: #ffffff;
  margin: 0;
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
    padding: 40px 120px;
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
      text-align: left;
      margin: 0 0 0 50px;

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
