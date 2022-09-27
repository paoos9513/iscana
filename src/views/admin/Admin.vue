<script>
export default {
  components: {},
};
</script>
<template>
  <div class="Container">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3 color-tittle">Administrador</h3>
          <hr class="hr-tittle" />
        </div>
        <div class="d-grid gap-2 col-6 md-auto">
          <button class="botton-color" type="button" v-on:click="addProduct">
            Agregar un producto
          </button>
        </div>
        <div class="d-grid gap-2 col-6 md-auto" id="idNewProduct">
          <button class="botton-color" type="button">
            Agregar una categoria
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
    
    
<style lang="scss">
.color-tittle {
  color: rgb(27, 147, 139);
}

.hr-tittle {
  height: 2px;
  background-color: rgb(27, 147, 139);
}

.botton-color {
  background-color: rgb(27, 147, 139);
  color: white;
  border-radius: 15px;
  border: rgb(27, 147, 139);
  padding: 7px;
}
</style>>
    