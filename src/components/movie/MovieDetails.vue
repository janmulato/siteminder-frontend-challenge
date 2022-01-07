<template>
  <v-container class="movie-details" fill-height>
    <v-row fill-height>
      <v-col>
        <span>Please select a title from the sidebar</span>
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
}
</style>
