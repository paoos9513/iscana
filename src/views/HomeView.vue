<script>
import CategoryCard from '../components/CategoryCard.vue';
import FooterHome from '../components/FooterHome.vue';


export default {
  components: {
    CategoryCard,
    FooterHome,
  },
};
</script>
<!--Pantalla de un navegador-->
<template>

  <div class="Container">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3 color-tittle">En Iscana encuentra todo lo que deseas</h3>
          <hr class="hr-tittle" />
        </div>
      </div>
      <CategoryCard />
      
    </div>
    <FooterHome/>
  </div>
</template>

<style lang="scss">
.img-fluid {
  max-width: 50%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.color-tittle {
  color: rgb(27, 147, 139);
}

.hr-tittle {
  height: 2px;
  background-color: rgb(27, 147, 139);
}

</style>