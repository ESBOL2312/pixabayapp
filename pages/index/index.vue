<template>
    <v-row>
        <v-col cols="3" v-for="image in images" :key="image.id">
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
     computed: {
    images() {
      return this.$store.getters.GET_CAT;
    }},    
    middleware:['popularImages']
}
</script>