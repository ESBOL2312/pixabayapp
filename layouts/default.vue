<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fade-img-on-scroll="true" src="https://pixabay.com/get/53e3d4434d5aa414f6da8c7dda7936791537dcec56506c48702679dc9e45cc50b1_1280.jpg"
      :clipped-right="clipped"
      fixed
      app
    >
    <div class="d-flex justify-space-between m-menu">
      <v-btn to="/" icon color="red" size="100">
        <v-img src="/images/logo.svg" cover max-width="40">
        </v-img>
      </v-btn>
      <div class="d-flex">
        <search-input />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
    </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SearchInput from '~/components/SearchInput.vue'
export default {
  data () {
    return {
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
  components:{
    SearchInput,
  }
}
</script>
<style>
.m-menu{
  width:100%;
}
</style>
