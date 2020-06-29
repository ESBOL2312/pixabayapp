<template>
    <v-row class="category">
        <v-col cols="3" v-for="image in images" :key="image.id">
          <img-card :gallery-items="image"></img-card>
        </v-col>
    </v-row>
</template>
<script>

import imgCard from "~/components/ImgCard.vue"
import {mapGetters} from "vuex"

export default {
    data(){
        return{
           aa:this.$route.params.category
        }
    },
    computed:mapGetters({
        images:'GET_CATEGORY_IMAGES'
    }),
    components:{
        imgCard
    },
    middleware:['getFromCategory']
}
</script>
<style>

</style>