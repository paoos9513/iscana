<script>
import { RouterLink, RouterView } from "vue-router"
import Product from './views/product/Product.vue'
import HomeView from "./views/HomeView.vue"

export default {
  components: {
    RouterLink,
    RouterView,
    Product,
    
  },
};
</script>

<template >
  <header>
    <!--Opciones del navegador-->
    <nav class="navbar bg-light header-nav d-flex ">
      <div class="justify-content-end col-xs-12 col-sm-6 col-md-4 col-lg-2">
        <a class="navbar-brand" href="#">
          <RouterLink to="/" class="color-font">Inicio</RouterLink>
        </a>
        <a class="navbar-brand" href="#">
          <RouterLink to="/Product" class="color-font">Productos</RouterLink>
        </a>
      </div>
    </nav>
  </header>
  <RouterView />
  <footer>Este es el footer</footer>
</template>

<style scoped lang="scss">
.color-font {
  color: rgb(27, 147, 139);
}

.header-nav {
  background-image: url("found.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  //width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
