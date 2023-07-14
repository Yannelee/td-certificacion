import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    mejoresProductos:[],
    tiposProductos:[],
    cart:[],
    routes:[
      {
        icon: 'mdi-home',
        title: 'Inicio',
        name: 'Home',
      },
      {
        icon: 'mdi-human-male-male',
        title: 'Hombre',
        name: 'MenClothes',
      },
      {
        icon: 'mdi-human-female-female',
        title: 'Mujer',
        name: 'WomenClothes',
      },
      {
        icon: 'mdi-laptop',
        title: 'Electrónica',
        name: 'Electronic',
      },
      {
        icon: 'mdi-cart',
        title: 'Carrito',
        name: 'Cart',
      },
      {
        icon: 'mdi-information',
        title: 'About',
        name: 'About',
      },
    ],
  },
  getters: {
    prodInCart(state){
      return state.cart.map(prod=>{
        let prodCart = prod
        prodCart.total = prod.count* prod.price
        return prodCart
      })
    },
    totalCountCart(state){
      return state.cart.reduce((total, prod)=>{
        return total + prod.count
      },0)
    },
    totalCart(state, getters){
      return getters.prodInCart.reduce((total,prod)=>{
        return total + prod.total
      },0)
    },
    discount(state, getters){
      if(getters.totalCart < 500) return Math.round(getters.totalCart * 0.05) 
      if(getters.totalCart >= 500) return Math.round(getters.totalCart * 0.11)
    }
  },
  mutations: {
    SET_MEJORES_PRODUCTOS(state, mejoresProductos){
      state.mejoresProductos = mejoresProductos
    },
    SET_TIPOS_PRODUCTOS(state, tiposProductos){
      state.tiposProductos = tiposProductos
    },
    SET_PRODUCTOS(state, products){
      state.products = products
    },
    ADD_TO_CART(state, product){
      let prodInCart = state.cart.some(prod => prod.id == product.id)
      if(!prodInCart){
        product.count = 1
        state.cart.push(product)
      } else {
        state.cart.forEach(prod=>{
          if(prod.id == product.id) prod.count+=1
        })
      }
    },
    ADD_COUNT(state, product){
      state.cart.forEach(prod=>{
        if(prod.id == product.id) prod.count++
      })
    },
    REDUCE_COUNT(state, product){
      state.cart.forEach(prod=>{
        if(prod.id == product.id && prod.count>1) prod.count--
      })
    },
    DELETE_ITEM_CART(state, product){
      let indexProd = state.cart.findIndex(prod=>prod.id == product.id)
      state.cart.splice(indexProd, 1)
    }
  },
  actions: {
    async getHome({commit}){
      let response = await fetch('/home.json')
      let {mejoresproductos, tiposproductos} = await response.json()
      commit('SET_MEJORES_PRODUCTOS', mejoresproductos)
      commit('SET_TIPOS_PRODUCTOS', tiposproductos)
    },
    async getProducts({commit}, category){
      let response = await fetch(`/${category}.json`)
      let datos = await response.json()
      commit('SET_PRODUCTOS', datos)
    },
    addToCart({commit}, product){
      commit('ADD_TO_CART', product)
    },
    addCountCart({commit},product){
      commit('ADD_COUNT', product)
    },
    reduceCountCart({commit}, product){
      commit('REDUCE_COUNT', product)
    },
    deleteItemCart({commit}, product){
      commit('DELETE_ITEM_CART', product)
    }
  },
  modules: {
  }
})
