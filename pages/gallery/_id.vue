<template>
  <v-row>
    <v-col cols="4">
      <v-avatar size="120">
        <img :src="image.userImageURL" :alt="image.user" />
      </v-avatar>
	  <h2>
		{{image.user}}
	  </h2>
      {{image.views}}
      {{image.likes}}
      {{image.downloads}}
    </v-col>
    <v-col cols="8"></v-col>
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
  computed: mapGetters({
    image: "GET_IMG_ONE"
  }),
  middleware: ["getOneImage"]
};
</script>
<style></style>