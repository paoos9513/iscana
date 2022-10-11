<script>
import { RouterLink, RouterView } from "vue-router";
import { useProductStore } from "./stores/counter.js";
export default {
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      products: null,
      categories: null,
    };
  },
  setup() {
    const store = useProductStore();
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template >
  <header>
    <!--Opciones del navegador-->
    <nav class="navbar bg-light header-nav d-flex">
      <div class="justify-content-end col-xs-12 col-sm-6 col-md-4 col-lg-2">
        <a class="navbar-brand" href="#">
          <RouterLink to="/" class="color-font">Inicio</RouterLink>
        </a>
        <a class="navbar-brand" href="#">
          <RouterLink to="/Product" class="color-font">Productos</RouterLink>
        </a>
        <a class="navbar-brand" href="#">
          <RouterLink to="/Admin" class="color-font">Administrador</RouterLink>
        </a>
        <a class="navbar-brand" href="#">
          <RouterLink to="/AddProduct" class="color-font">Add</RouterLink>
        </a>
        <a class="navbar-brand" href="#">
          <RouterLink to="/Authentication" class="color-font">Iniciar sesion</RouterLink>
        </a>
      </div>
    </nav>
  </header>
  <RouterView :categories="categories" :products="products" />
</template>

<style scoped lang="scss">
.color-font {
  color: rgb(27, 147, 139);
  padding: 10px;
  margin: 5px;
  text-decoration: none !important;
}

.header-nav {
  background-image: url("found.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: start;
  padding: 15px;
}
</style>
