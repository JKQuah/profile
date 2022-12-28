<template>
  <div class="interest-wrapper mb-5">
    <div class="interest-items" v-for="hobby in hobbies" :key="hobby.id">
      <img
        :src="currentUrl + hobby.image"
        :alt="hobby.alternate"
        :title="hobby.alternate"
      />
      <span class="subtitle">{{ hobby.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.currentUrl = window.location.href;
  },
  data() {
    return {
      currentUrl: "",
      hobbies: [
        {
          id: 1,
          name: "Basketball",
          alternate: "basketball",
          image: "/assets/hobby-icon/basketball.png",
        },
        {
          id: 2,
          name: "Badminton",
          alternate: "badminton",
          image: "/assets/hobby-icon/badminton.png",
        },
        {
          id: 3,
          name: "Gym",
          alternate: "gym",
          image: "/assets/hobby-icon/strength.png",
        },
        {
          id: 4,
          name: "Reading",
          alternate: "reading",
          image: "/assets/hobby-icon/reading.png",
        },
        {
          id: 5,
          name: "Travelling",
          alternate: "travelling",
          image: "/assets/hobby-icon/travelling.png",
        },
        {
          id: 6,
          name: "Netflix",
          alternate: "netflix",
          image: "/assets/hobby-icon/netflix.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.interest-image-holder {
  img {
    width: 100%;
    height: auto;
  }
}

.interest-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .interest-items {
    .subtitle {
      display: block;
      width: 100%;
      text-align: center;
      text-transform: capitalize;
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin: 1.5rem 1.5rem 0.5rem;
  }
}
</style>