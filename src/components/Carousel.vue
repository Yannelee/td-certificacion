<template>
      <v-carousel
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      show-arrows-on-hover
      class="px-5"
      height="550"
    >
      <template v-for="(item, index) in mejoresProductos">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap" style="height: 100%" align="center">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < mejoresProductos.length">
                <v-col
                  :key="i"
                  class="vino mx-2"
                >
                  <v-sheet
                    v-if="+index + i < mejoresProductos.length"
                    color="transparent"
                  >
                  <v-hover>
                    <v-card class="mx-auto py-4" max-width="400" height="500" tile flat>
                      <v-img
                        :src="mejoresProductos[+index + i].image"
                        height="350"
                        contain
                        class="align-self-center mx-2"
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

                      <v-card-title class="pa-2 text-h6 text-uppercase justify-center text-center">
                        {{ mejoresProductos[+index + i].title }}
                      </v-card-title>
                    </v-card>
                  </v-hover>
                  </v-sheet>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
</template>

<script>
export default {
  name:'Carousel-comp',
  props:{
    mejoresProductos:{
      type: Array,
      required: true
    }
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) return 4;
      if (this.$vuetify.breakpoint.lg) return 3;
      if (this.$vuetify.breakpoint.md) return 2;
      return 1;
    },
  },
}
</script>

<style>

</style>