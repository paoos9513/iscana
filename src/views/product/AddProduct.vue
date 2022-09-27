<script>
import { useProductStore } from "../../stores/counter.js";
export default {
  data() {
    return {
      id: null,
      idCategory: null,
      name: null,
      description: null,
      price: null,
      gender: null,
      imageURL: null,
    };
  },
  setup() {
    const store = useProductStore();

    return {
      store,
    };
  },

  methods: {
    addProduct() {
      const newProduct = {
        idCategory: this.idCategory,
        name: this.name,
        description: this.description,
        price: this.price,
        gender: this.gender,
        imageURL: this.imageURL,
      };
      this.store.products.push(newProduct);
      console.log(newProduct);
      this.idCategory = "";
      this.name = "";
      this.description = "";
      this.price = "";
      this.gender = "";
      this.imageURL = "";
    },
  },
};
</script>
    
    
<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control" v-model="idCategory">
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="name" required class="form-control" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              v-model="description"
              required
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="number"
              v-model="price"
              required
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Gender</label>
            <br/>
            <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="Mujer"
                v-model="gender"
                value="Mujer"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Mujer
              </label>
              <br/>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="Hombre"
                v-model="gender"
                value="Hombre"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Hombre
              </label>
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input type="text" v-model="imageURL" class="form-control" />
          </div>
          <button type="button" class="btn btn-primary" v-on:click="addProduct">
            Agregar product
          </button>
        </form>
        <!-- <p>{{ store.products.length }}</p> -->
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
    <style lang="scss">
</style>>
    