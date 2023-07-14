<template>
  <div class="home">
    <h1 class="text-uppercase text-center mt-5">Mejores Productos</h1>
    <Carousel :mejoresProductos="mejoresProductos"/>
    <h1 class="text-uppercase text-center">Categorias</h1>
    <v-row>
      <v-col 
        sm="12"
        md="4"
        lg="4"
        v-for="product in tiposProductos" :key="product.name"
      >
        <Card :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue"
import Card from "@/components/Card.vue"
import { mapActions, mapState } from "vuex";
export default {
  name: "home-view",
  components: {
    Carousel,
    Card
  },
  data: () => ({}),
  created() {
    this.getHome();
  },
  computed: {
    ...mapState(["mejoresProductos", "tiposProductos"]),
  },
  methods: {
    ...mapActions(["getHome"]),
  },
};
</script>
<style >
body{
  background-color: whitesmoke;
}
</style>
