
<!--Pantalla de un navegador-->
<script>
import ProductCard from "../../components/ProductCard.vue";
import { useProductStore } from "../../stores/counter.js";
export default {
  components: {
    ProductCard,
  },
  setup() {
    const store = useProductStore();

    return {
      store,
    };
  },
};
</script>

<template>
  <div v-if="store.products.length === 0">No hay productos agregados</div>
  <div v-else class="container-fluid bisabuelo">
    <!-- <p>{{ store.products.length }}</p> -->
    <ul class="row card-products">
      <li
        class="col-xs-12 col-sm-6 col-md-4 col-lg-4 card-product"
        v-for="product in store.products"
        :key="product.name"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.card-product {
  padding: 30px;
  list-style: none;
}
</style>
