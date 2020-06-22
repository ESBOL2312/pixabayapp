<template>
  <div class="img-slider">
    <v-carousel height="550" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item 
        :to="'/gallery/'+slide.id"
        v-for="slide in slideItems" 
        :key="slide.id">
        <v-img
          cover
          :alt="slide.tags"
          :src="slide.largeImageURL"
          :lazy-src="slide.previewURL"
          aspect-ratio="1"
          class="grey lighten-2"
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
  props: ["slideItems"]
};
</script>