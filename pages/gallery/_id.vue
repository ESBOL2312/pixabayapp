<template>
  <v-row class="mt-5 mb-5">
    <v-col md="4" xs="1" class="text-center">
      <div class="mb-5">
        <v-avatar size="120" class="elevation-5 mb-1">
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
      <div class="align-center d-flex justify-center">
        <span class="font-weight-black mr-5">Tags:</span>
        <v-chip-group column>
          <v-chip v-for="(tag, i) in tags" :key="i">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-col>
    <v-col md="8" xs="1">
       <v-btn class="" :fixed="true"  @click="back" fab  icon dark color="warning">
        <v-icon dark>mdi-arrow-left-circle-outline</v-icon>
      </v-btn>
      <v-card class="elevation-5">
        <v-img :lazy-src="image.previewURL" :src="image.largeImageURL" color="red" class="rounded"></v-img>
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
  methods:{
    back(){
      this.$router.back()
    }
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