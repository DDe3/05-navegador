<template>
  <div>
      <!--
      <a href="/">About</a>
      <a href="/help">Help</a>
      <a href="/pokemon">Pokemon</a>-->
      <router-link to="/">About</router-link>
      <router-link to="/help">Help</router-link>
      <router-link to="/pokemon">Pokemon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

a {
    font-weight: bold;
    color: blue;
    margin: 0 10px;
    border-style: solid;
    border-radius: 5px;
}

a:hover {
    color: yellowgreen;
}

.router-link-exact-active {
    color: yellowgreen;
}

</style>