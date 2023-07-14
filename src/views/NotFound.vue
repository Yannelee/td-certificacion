<template>
  <div class="notFound">
    <div class="background"></div>
    <h1 class="notFound__text mt-10">LA PÁGINA SOLICITADA NO EXISTE</h1>

    <v-btn to="/" large outlined class="ma-5">
      <v-icon class="mr-4">mdi-arrow-left-circle</v-icon>
      VOLVER A INICIO
    </v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .notFound{
    text-align: center;
  }
  .background{
    height: 100vh;
    width: 100%;
    background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .notFound__text{
    font-size: 3rem;
    margin-top: 1rem;
  }
</style>