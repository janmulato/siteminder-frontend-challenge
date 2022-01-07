<template>
  <v-container
    fluid
    class="movie-card"
    :class="{ active: active }"
    align="start"
  >
    <v-row class="pa-0">
      <v-col class="pa-0" cols="2">Poster</v-col>
      <v-col class="details pa-0">
        <h2 class="title">Movie Title</h2>
        <p>(Year)</p>
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
    padding: 16px 0;
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

  .details {
    text-align: left;
    .title {
      padding: 0 0 8px;
    }
  }
}
</style>
