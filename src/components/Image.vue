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
  width: 100%;
}
</style>

