<template>
  <div class="text-center">
    Ropa Mujer
    <v-row>
      <v-col 
        sm="6"
        md="4"
        lg="3"
        v-for="product in products" :key="product.title"
      >
        <Card :product="product" />
      </v-col>
    </v-row>
  </div>
</template>


//-REDIRECT COMO PROP
<script>
import Card from "@/components/CardShop.vue"
import { mapActions, mapState } from 'vuex'

export default {
  name: "women-view",
  components: {
    Card
  },
  computed:{
    ...mapState(['products'])
  },
  methods:{
    ...mapActions(['getProducts'])
  },
  created(){
    this.getProducts('ropaMujer')
  }

}
</script>

<style>

</style>