<template>
  <div>
    <v-app-bar  color="white" class="align-center" flat>
      <v-btn icon  @click="drawer = true">
        <v-icon color="black">mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn text to="/">
        <v-row justify="center">
            <v-toolbar-title class="">deTodito</v-toolbar-title>
          </v-row>
      </v-btn>     
      
      <v-spacer></v-spacer>

      <v-btn text to="/mujer">
        Mujer
      </v-btn>
      <v-btn text to="/hombre">
        Hombre
      </v-btn>
      <v-btn text to="/electronica">
        Electrónica
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn text class="" to="/carrito">
        Carrito
        <v-icon color="black">mdi-cart-outline</v-icon>
        <v-badge :value="totalCountCart>0" :content="totalCountCart"></v-badge>
      </v-btn>
    </v-app-bar>
      <v-divider></v-divider>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute === route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name:'navbar-comp',
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed:{
    ...mapState(['routes']),
    ...mapGetters(['totalCountCart']),
    currentRoute(){
      return this.$route.name
    }
  },
  methods:{
    redirectTo(routeName){
      this.$router.push({name:routeName})
    }
  },
}
</script>
<style scoped>
  .v-toolbar__title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
  }
  .v-btn:before{
    background-color: transparent !important;
  }
</style>