<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="deep-purple lighten-1">
        <v-btn
          v-for="route in routes"
          :key="route.name"
          color="white"
          text
          rounded
          class="my-2"
          @click="redirectTo(route.name)" 
          :disabled="currentRoute === route.name"
        >
          {{ route.title }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center deep-purple lighten-2">
        {{ new Date().getFullYear() }} — <strong>Yannelee Vera - Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name:'Footer-comp',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    computed:{
      ...mapState(['routes']),
      currentRoute(){
        return this.$route.name
      }
    },
    methods:{
      redirectTo(routeName){
        this.$router.push({name:routeName})
      }
    }
  }
</script>