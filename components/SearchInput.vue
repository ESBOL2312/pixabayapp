<template>
  <div class="search-input d-flex align-center">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="450" class="aaa">
        <v-card class="search-dialog">
          <v-card-actions class="pt-0">
            <v-btn class="close-btn" icon color="green darken-1" text @click="dialog = false">
              <v-icon small>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title class="pb-0">
            search
          </v-card-title>
          <v-card-text>
            <form>
              <v-text-field class="mt-0 pt-0" title="search" v-model="query" required></v-text-field>
            </form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn class="ml-5" @click.stop="dialog = true" small icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      dialog: false,
      tr:'true',
    };
  }
};
</script>
<style lang="scss">
  .v-dialog{
    overflow: visible ;
  }
  .search-dialog{

    .v-card__actions{
      position: relative;
    }
    .close-btn{
      position: absolute;
      top: -17px;
      right: -17px;
    }
  }
</style>