<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <h2>Выбор редакции</h2>
      <img-slider :slide-items="editorChoiseImages" class="mt-5 mb-5"></img-slider>
      <p class="text-h5 mt-15 mb-0">
          Популярные:
        </p>
      <v-row>
        <v-col cols="3" v-for="image in popularImages" :key="image.id">
          <img-card :gallery-items="image"></img-card>
        </v-col>
      </v-row>
      <v-row class="justify-center">
          <div class="text-center">
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
      </div>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import ImgCard from "~/components/ImgCard.vue";
import ImgSlider from "~/components/ImgSlider.vue";
import { mapGetters } from "vuex";
export default {
  data(){
    return {
      page:1
    }
  },
  components: {
    ImgCard,
    ImgSlider
  },
  computed: mapGetters({
    editorChoiseImages: "GET_EDCH",
    popularImages: "GET_CAT"
  }),
  middleware: ["getEditorsChoise","popularImages"]
};
</script>
