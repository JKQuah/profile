<template>
  <button class="btn btn-outline-success" @click="navigate(links)">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    links: String
  },
  methods: {
    navigate: function(links) {
      this.$router.push(links)
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-outline-success {
  color: $dark-green;
  border-color: $dark-green;
  border-radius: 20px;
  padding: 0.5rem 3rem;
  margin: 1rem 0;
  font-weight: bold;

  &:hover {
    color: #fff;
    background-color: $dark-green;
    border-color: $dark-green;
  }
}
</style>