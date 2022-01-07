<template>
  <v-container class="pagination" fluid>
    <v-row>
      <v-col cols="2">
        <v-btn
          small
          v-if="hasPrevious()"
          class="button"
          elevation="2"
          plain
          outlined
          @click="previous()"
          :disabled="!hasPrevious()"
        >
          <v-icon>mdi-menu-left</v-icon>
        </v-btn>
      </v-col>
      <v-col class="total-page">
        <span>Page {{ page }}/{{ totalPage }}</span>
      </v-col>
      <v-col cols="2">
        <v-btn
          small
          v-if="hasNext()"
          class="button"
          plain
          outlined
          @click="next()"
          :disabled="!hasNext()"
        >
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
  @Prop() private page!: number;
  @Prop() private totalPage!: string | number;

  public previous(): void {
    if (this.hasPrevious()) {
      const page = this.page - 1;
      this.$emit("update:page", page);
    }
  }

  public next(): void {
    if (this.hasNext()) {
      const page = this.page + 1;
      this.$emit("update:page", page);
    }
  }

  public hasPrevious(): boolean {
    return this.page > 1;
  }

  public hasNext(): boolean {
    return this.totalPage > this.page;
  }
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
