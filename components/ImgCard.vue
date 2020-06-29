<template>
  <div>
    <v-hover v-slot:default="{hover}">
    <v-card  :to="'/gallery/'+galleryItems.id"  :elevation="hover ? 16 : 1"
    class="mx-auto"
    max-width="320" loading="true">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="galleryItems.webformatURL"
    >
    </v-img>
  </v-card>
    </v-hover>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    props:["galleryItems"]
  }
</script>
<style>

</style>
