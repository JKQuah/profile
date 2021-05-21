<template>
  <div class="interest-wrapper">
      <div class="interest-items">
        <img src="@/assets/hobby-icon/badminton.png" alt="badminton" title="badminton">
        <span class="subtitle">Badminton</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/basketball.png" alt="basketball" title="basketball">
        <span class="subtitle">Basketball</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/exercise.png" alt="exercise" title="exercise">
        <span class="subtitle">Exercise</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/strength.png" alt="strength" title="strength">
        <span class="subtitle">Gym</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/reading.png" alt="reading" title="reading">
        <span class="subtitle">Reading</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/learning.png" alt="learning" title="learning">
        <span class="subtitle">Exploring</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/netflix.png" alt="netflix" title="netflix">
        <span class="subtitle">Netflix</span>
      </div>
      <div class="interest-items">
        <img src="@/assets/hobby-icon/youtube.png" alt="youtube" title="youtube">
        <span class="subtitle">Youtube</span>
      </div>
    </div>
</template>

<script>
export default {

}
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
    margin: 1.5rem;
  }
}
</style>