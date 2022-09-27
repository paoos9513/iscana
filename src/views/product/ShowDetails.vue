<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  props: ["products"],
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => this.product.id == this.id);
  },
};
</script>
    
    
<template></template>
    
    
<style lang="scss">
</style>>
    