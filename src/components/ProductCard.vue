<script>
import AddProductVue from "../views/product/AddProduct.vue";
import { useProductStore } from "../stores/counter.js";

export default {
  components: {},
  setup() {
    const store = useProductStore();

    return {
      store,
    };
  },
  methods: {
    deleteProduct: function (product) {
      const index = this.store.products.indexOf(product);
      if (index > -1) {
        // only splice array when item is found
        this.store.products.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
  props: ["product"],
};
</script>
    
<template>
  <div class="card">
    <img :src="product.imageURL" class="img-card" alt="perfume_image" />
    <div class="card-body">
      <h3 class="card-title color-title">{{ product.name }}</h3>
      <p class="card-text color-text-p">
        Description: {{ product.description }}
      </p>
      <p>Price: {{ product.price }}</p>
      <p>Gender: {{ product.gender }}</p>
      <button type="button" class="btn btn-light btn-color">Ver más</button>
      <button
        type="button"
        class="btn btn-danger"
        @click="deleteProduct(product)"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>
      
<style lang="scss">
.btn-color {
  background-color: rgb(27, 147, 139);
  color: white;
}

.color-title {
  color: rgb(27, 147, 139);
}

.color-text-p {
  color: gray;
}
</style>