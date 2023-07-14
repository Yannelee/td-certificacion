<template>
  <v-container>
    <v-card 
      class="mx-auto text-center py-2" 
      max-width="344" 
      hover
      :to="redirect(product.name)"
    >
      <v-card-title class="pa-2 text-h6 text-uppercase justify-center text-center" style="width=100%">
        {{ product.name }}
      </v-card-title>
      <v-img
        :src="product.image"
        height="300"
        contain
        class="align-self-center ma-1"
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
  methods:{
    redirect(name){
      if(name == "men's clothing") return "/hombre"
      if(name == "women's clothing") return "/mujer"
      else return "/electronica"
    }
  }
}
</script>

<style>
  .v-btn:before{
    background-color: transparent !important;
  }
</style>