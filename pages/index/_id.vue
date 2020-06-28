<template>
     <v-row>
        <v-col cols="3" v-for="image in posts" :key="image.id">
          <img-card :gallery-items="image"></img-card>
        </v-col>
    </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import imgCard from "~/components/ImgCard.vue"
export default {
  components:{
        imgCard
    },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ $axios,params}) {
    let response = await $axios.$get(`https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&popular=true&page=${params.id}`)
    return { posts: response.hits } 
  },
  head () {
    return {
      title: this.name
    }
  }
}
</script>