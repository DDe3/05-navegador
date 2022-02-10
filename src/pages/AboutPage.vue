<template>
  <h1>Pagina About</h1>
  <h2>{{ nombre }}</h2>
  <button @click="cambiarNombre">Update component</button>
</template>

<script>
export default {

  data() {
    return {
      nombre : "No Daniel",
    }
  },
  methods: {
    cambiarNombre() {
      this.nombre = "Daniel"
      console.log(this.nombre);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMounted");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style>
</style>