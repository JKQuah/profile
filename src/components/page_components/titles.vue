<template>
  <p class="title">{{ title }}</p>
  <p class="subtitle">{{ subtitle }}</p>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0rem;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  margin-bottom: 1.5rem;
}
</style>