<template>
  <div class="social-media-wrapper">
    <!-- <transition appear name="float-up">
    <span class="social-media-icon" @click="navigateToFacebook"><i class="fab fa-facebook-f" title="Facebook"></i></span>
  </transition> -->
    <transition appear name="float-up-2">
      <span class="social-media-icon" @click="navigateToInstagram"
        ><i class="fab fa-instagram" title="Instagram"></i
      ></span>
    </transition>

    <transition appear name="float-up-3">
      <span class="social-media-icon" @click="navigateToLinkedIn"
        ><i class="fab fa-linkedin-in" title="Linked In"></i
      ></span>
    </transition>

    <transition appear name="float-up-4">
      <span class="social-media-icon" @click="navigateToGitHub"
        ><i class="fab fa-github" title="GitHub"></i
      ></span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facebook: "", //https://m.facebook.com/jiakai.quah
      instagram: "https://www.instagram.com/olzzonne_quah/",
      linkedin: "https://www.linkedin.com/in/jia-kai-quah-434180173",
      github: "https://github.com/JKQuah/",
    };
  },
  methods: {
    navigateToFacebook: function () {
      window.open(this.facebook, "_blank");
    },
    navigateToInstagram: function () {
      window.open(this.instagram, "_blank");
    },
    navigateToLinkedIn: function () {
      window.open(this.linkedin, "_blank");
    },
    navigateToGitHub: function () {
      window.open(this.github, "_blank");
    },
    beforeEnter: (el) => {},
    enter: (el) => {},
  },
};
</script>

<style lang="scss" scoped>
.social-media-icon {
  margin: 0 5px;
  padding: 1rem;
  font-size: 20px;
  color: $dark-blue;

  &:hover {
    color: $dark-green;
    cursor: pointer;
    transform: scale(1.5);
  }
}

/* float up transition */
.float-up-enter-from,
.float-up-2-enter-from,
.float-up-3-enter-from,
.float-up-4-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.float-up-enter-active {
  transition: all 1s ease;
}

.float-up-2-enter-active {
  transition: all 1s ease;
  transition-delay: 0.2s;
}
.float-up-3-enter-active {
  transition: all 1s ease;
  transition-delay: 0.4s;
}
.float-up-4-enter-active {
  transition: all 1s ease;
  transition-delay: 0.6s;
}

.social-media-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>