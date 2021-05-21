<template>
  <ul class="nav justify-content-evenly page-content">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Gallery' }">Gallery</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Contact' }">Contact</router-link>
    </li>
  </ul>
  <router-view class="page-content" v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Footer from '@/components/footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden; 
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-blue;
}

.page-content {
  margin: auto;
  max-width: $page-max-width;
}

.nav {
  padding: 30px;
  border-bottom: 1px solid #ccccccd6;

  a {
    font-weight: bold;
    color: $dark-blue;

    &:hover {
      color: $dark-green;
      transform: scale(1.2);
    }

    &.router-link-exact-active {
      color: $dark-green;
    }
  }
}

/* route - transition */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
