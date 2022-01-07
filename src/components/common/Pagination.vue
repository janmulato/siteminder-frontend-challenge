<template>
  <v-container class="pagination" fluid>
    <v-row>
      <v-col cols="2">
        <v-btn class="button" elevation="2" plain outlined>
          <v-icon>mdi-menu-left</v-icon>
        </v-btn>
      </v-col>
      <v-col class="total-page">
        <span>Page {{ page }}/{{ totalPage }}</span>
      </v-col>
      <v-col cols="2">
        <v-btn class="button" plain outlined>
          <v-icon>mdi-menu-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
  @Prop() private page!: string | number;
  @Prop() private totalPage!: string | number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pagination {
  background: #ffffff;
  .row {
    margin: auto;
  }

  .total-page {
    font-size: 14px;
    line-height: 17px;
    margin: auto;
  }

  .button {
    border: 1px solid #c1c1c1;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #c4c4c4;
  }
}
</style>
