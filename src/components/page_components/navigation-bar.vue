<template>
  <ul class="footer-list-group">
    <li class="footer-list-item" v-for="(nav, index) in navs" :key="index">
      <a :href="nav.route">{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: [],
  components: [],
  data() {
    return {
      navs: [
        { name: "Profile", route: "" },
        { name: "Experiences", route: "#experience" },
        { name: "Quotes", route: "#quotes" },
        { name: "Skill Proficiency", route: "#skill" },
        { name: "Programming Skills", route: "#programming" },
        { name: "Interest & Hobby", route: "#interest" },
        { name: "Languages", route: "#language" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-list-group {
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem;
  flex-wrap: wrap;

  .footer-list-item {
    list-style: none;
    padding: 0.5rem 1rem;
  }

  a {
    color: $dark-blue;
    text-decoration: none;
    text-align: center;

    &:hover {
      font-weight: bold;
      color: $dark-green;
    }
  }
}
</style>