
<!--Pantalla de un navegador-->
<script>
import ProductCard from '../../components/ProductCard.vue'
export default {
  components: {
    ProductCard,
  }
};
</script>

<template>
 
  <div class="container-fluid bisabuelo">
    <ul class="row card-products">
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
      <li class="col-xs-12 col-sm-6 col-md-4 col-lg-2 card-product"><ProductCard /></li>
    </ul>
  </div>
 
</template>

<style lang="scss">

.card-product{
  padding: 30px;
  list-style: none
}
</style>
