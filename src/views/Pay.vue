<template>
  <v-row class="ma-2">
    <v-col sm="12" md="6">
      <v-card class="">
        <v-form ref="form" v-model="valid" class="pa-3 mx-auto">
          <div class="text-h4">Datos del Comprador</div>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="reEmail"
            :rules="emailRules"
            label="Repetir E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="telefono"
            :rules="emailRules"
            label="Teléfono"
            required
          ></v-text-field>

          <div class="text-h4">Datos del Despacho</div>

          <v-text-field
            v-model="direccion"
            :rules="nameRules"
            label="Direccion"
            required
          ></v-text-field>

          <v-text-field
            v-model="comuna"
            :rules="nameRules"
            label="Comuna"
            required
          ></v-text-field>

          <div class="text-h4">Forma de Pago</div>
          <v-radio-group v-model="payment">
            <v-radio
              v-for="pay in payMethods"
              :key="pay"
              :label="pay"
              :value="pay"
              :rules="paymentRules"
            ></v-radio>
          </v-radio-group>
        </v-form>
      </v-card>
    </v-col>

    <v-col sm="12" md="6">
      <v-card class="mx-auto text-center pa-5" color="orange lighten-4">
        <v-card-text>
          <p class="text-h4 text--primary">Tu Compra de Hoy</p>
          <ul class="text-start">
            <li v-for="item in cart" :key="item.title">
              {{ item.title }} <br />
              Cant: {{ item.count }}
            </li>
          </ul>
          <div class="text-h6 text--primary text-end">
            SubTotal: ${{ totalCart }}
          </div>
          <div class="text-h6 text--primary text-end">
            Descuento: ${{ discount }}
          </div>
          <div class="text-h6 text--primary text-end">
            Total a Pagar: ${{ totalCart - discount }}
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn :disabled="!valid" color="orange" @click="validate">
            Pagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title class="text-h5">
          Tu Orden N° {{ ordenNumber }} está confirmada y pasará a preparación.
        </v-card-title>
        <v-card-text
          >Recibirá un correo al {{ email }} cuando esté lista para Despacho.
          <br />
          Gracias por su compra.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="dialog = false">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "pay-comp",
  data: () => ({
    dialog: false,
    valid: false,
    name: "",
    nameRules: [(v) => !!v || "Campo Requerido"],
    email: "",
    emailRules: [
      (v) => !!v || "Campo Requerido",
      (v) => /.+@.+\..+/.test(v) || "Debes ingresar un E-mail válido",
    ],
    reEmail: "",
    direccion: "",
    comuna: "",
    telefono: "",
    payMethods: [
      "Transferencia Bancaria",
      "Servipag",
      "Contra Entrega",
      "Webpay",
    ],
    payment:'',
    paymentRules:[(v) => !!v || "Campo Requerido"],
    
  }),
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCart", "discount"]),
    ordenNumber() {
      return Math.round(Math.random() * 1000);
    },
  },
  methods: {
    validate() {
      if(this.email != this.reEmail ) return alert('Los Email deben coincidir')
      if (!this.payment) return alert('Debes seleccionar un método de pago')
      
      this.$refs.form.validate();
      this.dialog = true;

    },
  },
};
</script>