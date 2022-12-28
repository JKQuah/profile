<template>
  <div class="footer">

    <NavigationBar />
    
    <div class="footer-banner">
      <small>
        This profile is coded using
        <span class="highlight">Vue</span>
        and designed by
        <span class="highlight">Olzzonne Quah </span>
        <i class="fas fa-heart"></i>
        | 2023
      </small>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./page_components/navigation-bar.vue";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $bg-grey;
  margin-top: 3rem;

  .title {
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 1rem;
  }
}

.footer-banner {
  padding: 0.75rem 0;
  text-align: center;
  font-size: 14px;
  background: $dark-blue;
  color: $light-yellow;

  .highlight {
    font-weight: bold;
    color: $accent-green;
  }
}

@media screen and (max-width: $tablet) {
  .footer {
    .content {
      padding: 3rem 0.5rem 0;
      font-size: 14px;
    }
  }
}
</style>