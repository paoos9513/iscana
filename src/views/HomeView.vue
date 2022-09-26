<script>

export default {

};
</script>
<!--Pantalla de un navegador-->
<template>
  <div class="Container">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Perfumes Iscana</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <!-- <CategoryBox :category="categories[index-1]" /> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="logo.png" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div> -->

  <!-- <div class="row">
        <div v-for="index in this.categorySize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
             <img src="logo.png" class="d-block w-100" alt="..." />
        </div>
      </div> -->
</template>

<style lang="scss">
.img-fluid {
  max-width: 50%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>