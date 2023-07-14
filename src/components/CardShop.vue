<template>
  <v-container>
    <v-card 
      class="mx-auto pt-2 text-left" 
      max-width="344" 
      tile
    >
      <v-img
        :src="product.image"
        height="300"
        contain
        class="align-self-center ma-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-2"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-divider></v-divider>

      <v-card-text class="d-flex justify-space-between py-1" style="height:100px">
        {{product.title}}
        <v-spacer></v-spacer>
        <strong class="ml-10">${{product.price}}</strong>
      </v-card-text>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
        <v-rating
          :value="product.rating.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{product.rating.rate}} ({{product.rating.count}})
        </div>
      </v-row>
      </v-card-text>
      <v-card-actions class="justify-center green lighten-2" @click="agregar">
        <v-btn text>
          <v-icon>mdi-cart-plus</v-icon>
          Agregar

        </v-btn>
      </v-card-actions>
    </v-card>

      <v-card-actions @click="show = !show" class="white mx-auto" style="max-width:344px">
        <v-btn
          color="grey"
          text
        >
          Más Detalles
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition >
        <div v-show="show" class="white">
          <v-card-text>
            {{ product.text }} {{product.description}}
          </v-card-text>
        </div>
      </v-expand-transition>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:'Card-comp',
  props:{
    product:{
      type: Object,
      required: true
    }
  },
  data:()=>({
    show: false,
  }),
  computed:{
    ...mapState(['cart'])
  },
  methods:{
    ...mapActions(['addToCart']),
    redirect(name){
      if(name == "men's clothing") return "/hombre"
      if(name == "women's clothing") return "/mujer"
      else return "/electronica"
    },
    agregar(){
      this.addToCart(this.product)
    }
  }
}
</script>

<style>
  .v-btn:before{
    background-color: transparent !important;
  }
  .v-card__actions:hover{
    cursor: pointer !important;
  }
</style>