<template>
  <v-container
    fluid
    class="movie-card"
    :class="{ active: active }"
    align="start"
  >
    <v-row class="pa-0">
      <v-col class="pa-0" cols="1">
        <v-img
          src="http://img.omdbapi.com/?i=tt3896198&h=600&apikey=21bc2559"
          max-height="48px"
          max-width="48px"
        ></v-img>
      </v-col>
      <v-col class="movie-details">
        <div>
          <h2 class="title">Movie Title</h2>
          <p>(Year)</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MovieCard extends Vue {
  @Prop() private msg!: string;
  @Prop() private active!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.movie-card {
  cursor: pointer;
  .row {
    border-bottom: 1px solid #c4c4c4;
    padding: 16px 0 16px 24px;
  }

  &.active,
  &:hover {
    border-left: 4px solid #0051ee;
    background: linear-gradient(
      270deg,
      rgba(0, 78, 196, 0.17) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .movie-details {
    text-align: left;
    div {
      padding: 0 0 0 12px;
    }
    .title {
      padding: 0 0 8px 0;
    }
  }
}
</style>
