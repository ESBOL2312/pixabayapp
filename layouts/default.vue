<template>
  <v-app class="default-r">
    <v-navigation-drawer
      class="custom-back"
      v-model="drawer"
      :fixed="true"
      app
      src="images/left-back.jpg"
      style="max-height:100%"
    >
    <v-divider></v-divider>
      <v-list
        nav
        dense
      >
      <span class="h3 d-block pb-2">
        Categories:
      </span>
        <v-list-item-group v-model="item" color="primary p-10">
          <v-list-item
            v-for="(item, i) in categories"
            :key="i"
          >
            <!-- <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title v-text="item">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="position-top">
    <v-app-bar :src="randomImageUrl.largeImageURL"
      :clipped-right="clipped"
      fixed
      app>
    <div class="d-flex justify-space-between m-menu">
      <v-btn to="/" icon color="red" size="100">
        <v-img src="/images/logo.svg" cover max-width="40">
        </v-img>
      </v-btn>
      <div class="d-flex">
        <search-input />
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
      </div>
    </div>
    </v-app-bar>
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :absolute="!fixed"
      app
      class="justify-space-between align-center"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <a class="d-flex" href="https://pixabay.com/ru/" target="_blank">
       <v-subheader>images from</v-subheader>
        <v-img contain max-width="80" src="images/pixabayLogo.svg">
        </v-img>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
import SearchInput from '~/components/SearchInput.vue'
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      item:'',
      tr:true,
      sDialog:false,
      clipped: false,
      drawer: false,
      fixed: false,
      icons:{

      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: mapGetters({
    randomImageUrl: "GET_R_BACK",
    categories: "GET_CATEGORIES",
  }),
  components:{
    SearchInput,
  },
  middleware:['getAppBarImg']
}
</script>
<style lang="scss">
.m-menu{
  width:100%;
}
.default-l{
  .v-image__image{
    background-position:top !important;
  }
  .v-toolbar__image{
    opacity: 0.7 !important;
  }
}
#app {
  background-color: #2c3e50;
}
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background-color: #C5CAE9;
}
 
*::-webkit-scrollbar-thumb {
  background-color: #9575C2;
  outline: 1px solid #D1C4E9;
}
.position-top .v-image__image{
  background-position:top !important;
}
.custom-back {
  .v-navigation-drawer__image>.v-image{
    .v-responsive__sizer{
      background-color: #000;
      opacity: 0.67;
    }
    .v-image__image{
      filter:blur(3px)
    }
  }
  .v-list{
    padding: 1em;
  }
}
</style>
