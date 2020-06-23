<template>
  <v-row>
    <v-col cols="4" class="text-center">
      <div>
        <v-avatar size="120" class="elevation-5">
          <img  :src="image.userImageURL" :alt="image.user" />
        </v-avatar>
        <h2>{{image.user}}</h2>
      </div>
      <v-chip class="ma-2" color="success">
        <v-icon left>mdi-eye-check</v-icon>
        {{image.views}}
      </v-chip>
      <v-chip class="ma-2" color="success">
        <v-icon left>mdi-download</v-icon>
        {{image.downloads}}
      </v-chip>
      <v-chip class="ma-2" color="success">
        <v-icon left>mdi-thumb-up</v-icon>
        {{image.likes}}
      </v-chip>
      <div class="align-center d-flex">
        <span class="font-weight-black mr-5">Tags:</span>
        <v-chip-group column>
          <v-chip v-for="(tag, i) in tags" :key="i">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-col>
    <v-col cols="8">
      <v-card class="elevation-5">
        <v-img :src="image.largeImageURL" color="red" class="rounded"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    image() {
      return this.$store.getters.GET_IMG_ONE;
    },
    tags() {
      return this.image.tags.split(", ");
    }
  },
  middleware: ["getOneImage"]
};
</script>
<style></style>