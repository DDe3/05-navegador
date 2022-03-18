<template>
  <NavBar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
  

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  mounted() {
    //http://localhost:8081/Api/V1/cuentaHabientes/1/cuentasBancarias/2
    let body = {
      nombre:'Leonardo',
      apellido:'Salinas',
      edad:10
    }
    let respuesta = axios.get("http://localhost:8081/Api/V1/cuentaHabientes/1/cuentasBancarias/2", body).then(r => console.log(r));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
