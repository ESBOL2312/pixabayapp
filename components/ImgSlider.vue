<template>
  <div class="img-slider">
    <v-carousel :height="imageHeight" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item name="gallery-id" :to="'/gallery/'+slide.id" v-for="slide in slideItems" :key="slide.id">
        <v-img
          cover
          :alt="slide.tags"
          :src="slide.largeImageURL"
          :lazy-src="slide.previewURL"
          aspect-ratio="1"
          class="grey lighten-2 fill-height"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["slideItems"],
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "320px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "800px";
      }
    }
  }
};
</script>