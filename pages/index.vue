<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <h2>Выбор редакции</h2>
      <img-slider :slide-items="editorChoiseImages" class="mt-5 mb-5"></img-slider>
      <p class="text-h5 mt-15 mb-0">Популярные:</p>
      <nuxt-child></nuxt-child>
      <v-row class="justify-center">
        <div class="text-center">
          <v-pagination
            @input="goPage"
            v-model="page"
            :length="20"
            :total-visible="8"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </div>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import ImgSlider from "~/components/ImgSlider.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      page:parseInt(this.$route.params.id, 10)
    };
  },
  components: {
    ImgSlider
  },
  computed: mapGetters({
    editorChoiseImages: "GET_EDCH",
    popularImages: "GET_CAT"
  }),
  methods: {
    goPage(){
      this.$router.push(`/${this.page}`)
    }
  },
  middleware: ["getEditorsChoise"]
};
</script>
