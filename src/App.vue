<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components:{
    NavBar,
    Footer
  },
  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['getHome','getProducts'])
  },
  created(){
    this.getProducts()
    this.gethome()
  }

};
</script>
<style>
  .theme--light.v-application{
    background-color: transparent;
  }

</style>