<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <search-input></search-input>
    <v-row>
    <v-col cols="3" v-for="i in 5">
    <img-card>
    </img-card>
    </v-col>
  </v-row>
</v-container>
  </v-layout>
</template>
<script>
import ImgCard from '~/components/ImgCard.vue'
import SearchInput from '~/components/SearchInput.vue'
export default {
  components: {
    ImgCard,
    SearchInput
  }
}
</script>
