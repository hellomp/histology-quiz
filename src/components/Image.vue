<template>
  <img :src="require(`@/assets/slides/${image}`)" alt="path">
</template>
<script>
export default {
  props: ['image']
}
</script>
<style scoped>
img {
  border-radius: 50%;
  max-width: 100%;
  max-height: 85vh;
}
</style>

