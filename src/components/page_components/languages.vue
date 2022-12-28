<template>
  <div class="language-row mb-5">
    <div class="language-wrapper" v-for="language in languages" :key="language.id">
      <h1 class="language">{{ language.id }}
        <div class="dot"></div>
        <div class="dot"></div>
      </h1>
      <div class="rating">
        <span>Reading:</span>
        <span :class="[ language.reading > 7 ? 'green' : '', 'fw-bold' ]">{{ language.reading }}/10</span>
      </div>
      <div class="rating">
        <span>Writing:</span>
        <span :class="[ language.writing > 7 ? 'green' : '', 'fw-bold' ]">{{ language.writing }}/10</span>
      </div>
      <div class="rating">
        <span>Speaking:</span>
        <span :class="[ language.speaking > 7 ? 'green' : '', 'fw-bold' ]">{{ language.speaking }}/10</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { id: "EN", reading: 8, writing: 7, speaking: 8 },
        { id: "华", reading: 9.5, writing: 8, speaking: 10 },
        { id: "BM", reading: 6, writing: 5, speaking: 6 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.language-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .language-wrapper {
    text-align: center;
    width: 20%;
    margin: 1rem 0;

    .language {
      font-weight: bold;
      margin-bottom: 1rem;
      position: relative;
    }

    .rating {
      margin: 0.25rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}

.green {
  color: $dark-green;
}

.dot:nth-child(1) {
    background: $accent-green;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 56%;
    opacity: 0.7;
    mix-blend-mode: multiply

}

.dot:nth-child(2) {
    background: #ebf5f3;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    position: absolute;
    top: 0;
    left: 20%;
    mix-blend-mode: multiply
    // z-index: -1;
}
@media screen and (max-width: $mobile-L) {
  .language-row {
    margin: 0.25rem 3rem;
    flex-direction: column;

    .language-wrapper {
      width: 100%;

      .language {
        text-align: left;
      }
    }
  }

  .dot:nth-child(1) {
    left: 10%;
  }
}
</style>