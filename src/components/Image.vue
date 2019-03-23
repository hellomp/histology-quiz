<template>
  <img :src="require(`@/assets/${image}`)" alt="path">
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
}
</style>

