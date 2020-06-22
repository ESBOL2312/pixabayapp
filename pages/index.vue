<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <h2>Выбор редакции</h2>
      <img-slider :slide-items="editorChoiseImages" class="mt-5 mb-5"></img-slider>
      <v-row>
        <v-col cols="3" v-for="i in 5" :key="i">
          <img-card></img-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import ImgCard from "~/components/ImgCard.vue";
import ImgSlider from "~/components/ImgSlider.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ImgCard,
    ImgSlider
  },
  computed: mapGetters({
    editorChoiseImages: "GET_EDCH"
  }),
  middleware: ["getEditorsChoise"]
};
</script>
