<template>
  <div class="container">
    <div class="row" id="not-found">
      <div class="col-12 col-md-6 image-wrapper">
        <img src="@/assets/feeling_sad.svg" alt="" />
      </div>
      <div class="col-12 col-md-6 text-wrapper">
        <h1 class="title">404</h1>
        <h4 class="subtitle">Whoops... Page not found</h4>
        <p class="text-center">
          <transition name="button" appear>
            
          </transition>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
#not-found {
  margin: 3rem 0;

  .image-wrapper {
    img {
      width: 120%;
    }
  }

  .title {
    font-size: 96px;
    font-family: "Rubik Mono One", sans-serif;
  }

  .subtitle {
    font-size: 28px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: $tablet) {
  #not-found {
    .image-wrapper {
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: $mobile-L) {
  #not-found {
    .subtitle {
      font-size: 20px;
    }
  }
}
</style>