<template>
  <div class="text-center">
    <v-data-table
      :headers="headers"
      :items="cart"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Seguro que deseas borrar el producto?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </template>
      <template v-slot:[`item.img`]="{ item }">
        <v-img :src="item.image" max-width="30"></v-img>
      </template>
      
      <template v-slot:[`item.edit`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="reduceItem(item)"
        >
          mdi-minus-box-outline
        </v-icon>
        <span>{{item.count}}</span>
        <v-icon
          small
          class="ml-2"
          @click="plusItem(item)"
        >
          mdi-plus-box-outline
        </v-icon>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      
      <template v-slot:no-data>
        <div class="my-10">No hay productos añadidos </div>
        <v-btn
          outlined
          to="/"
          class="my-4"
        >
          Volver al Inicio
        </v-btn>
      </template>
    </v-data-table>

      <v-card v-if="cart.length > 0" class="mt-3 mr-3 text-center text-uppercase">
        <v-list-item>
          <v-list-item-content class="mx-5">
            <v-list-item-title>Subtotal: </v-list-item-title>
            <v-chip class="justify-center" outlined color="black" x-large>
              ${{totalCart}}
            </v-chip>
          </v-list-item-content>
          <v-divider vertical></v-divider>
          <v-list-item-content class="mx-5">
            <v-list-item-title>Descuentos: </v-list-item-title>
            <v-chip class="justify-center" outlined color="deep-purple" x-large>
              ${{discount}}
            </v-chip>
          </v-list-item-content>
          <v-divider vertical></v-divider>
          <v-list-item-content class="mx-5"> 
            <v-list-item-title>Total: </v-list-item-title>
            <v-chip class="justify-center" color="green lighten-3" x-large>
              ${{totalCart - discount}}
            </v-chip>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-btn v-if="cart.length > 0" class="mt-5" color="orange" to="/payment">
        Ir a pagar
      </v-btn>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
  export default {
    name:'Cart-view',
    data: () => ({
      dialogDelete: false,
      item:'',
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'img',
        },
        { text: 'Item', value: 'title' },
        { text: 'Categoria', value: 'category' },
        { text: 'Precio', value: 'price' },
        { value: 'edit', sortable: false },
        { value: 'actions', sortable: false },
      ],
    }),
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['totalCart', 'discount'])
    },
    created() {
      this.cart
    },

    methods: {
      ...mapActions(['addCountCart', 'reduceCountCart', 'deleteItemCart']),
      plusItem(item){
        this.addCountCart(item)
        console.log(this.cart);
      },
      reduceItem(item){
        this.reduceCountCart(item)
      },
      deleteItem (item) {
        console.log(item);
        this.item = item
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.deleteItemCart(this.item)
        this.dialogDelete = false
      },
    },
  }
</script>
<style>

</style>