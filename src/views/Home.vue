<template>
  <div class="home">
    <div class="row introduction">
      <div class="col-12 col-md-6">
        <div class="title">
          <h1>
            He
            <br>
            llo
            <span class="dot"></span>
            <span class="divider"></span>
          </h1>
        </div>
        <transition name="fade" appear>
          <div class="subtitle">
            <p>I'm a <span class="highlight">Junior Full Stack Developer</span></p>
            <p>and <span class="highlight">Sport Enthusiast</span> located at Penang, Malaysia</p>
          </div>
        </transition>
      </div>
      <transition name="float-down" appear>
        <div class="col-12 col-md-6 profile-picture vertical-center">
          <img src="@/assets/profile.svg" alt="My Profile" title="My Profile">
        </div>
      </transition>
    </div>
    <div class="row">
      <div class="col-0 col-md-4"></div>
      <div class="col-12 col-md-4 text-center">
        <transition name="button" appear>
          <DiscoverMoreBtn text="Discover More"/>
        </transition>
      </div>
      <div class="col-12 col-md-4 social-media-wrapper">
        <SocialMedia />
      </div>
    </div>
    <div class="bg-grey">
      <WorkingHourCounter />
    </div>
    <div class="quotes-wrapper">
      <QuoteWrapper />
    </div>
    <div class="skill-wrapper">
      <SkillWrapper />
    </div>
  </div>
</template>

<script>
import DiscoverMoreBtn from '@/components/page_components/buttons/btn-general.vue'
import WorkingHourCounter from '@/components/page_components/working-exp-counter.vue'
import SocialMedia from '@/components/page_components/social-media.vue'
import QuoteWrapper from '@/components/page_components/quotes.vue'
import SkillWrapper from '@/components/page_components/skill.vue'

export default {
  name: "Home",
  components: {
    DiscoverMoreBtn,
    WorkingHourCounter,
    SocialMedia,
    QuoteWrapper,
    SkillWrapper
  }
};
</script>

<style lang="scss">
.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduction {
  margin-top: 3rem;

  .title h1{
    font-family: 'Rubik Mono One', sans-serif;
    text-transform: uppercase;
    letter-spacing: -5px;
    font-size: 8rem;
    position: relative;
  }

  .subtitle {
    border-left: 8px solid $dark-green;
    padding: 0 1rem;
    font-size: 18px;

    .highlight {
      letter-spacing: 1px;
      text-transform: capitalize;
      font-weight: bold;
      color: $dark-green;
    }
  }

  .divider {
    position: absolute;
    bottom: 25px;
    right: 0;
    width: 60%;
    height: 50px;
    background: $dark-green;
    z-index: -1;
  }

  .dot {
    position: absolute;
    bottom: 45px;
    margin: 0 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: $dark-blue;
  }
}

.profile-picture {
  img {
    width: 100%;
    height: auto;
  }
}

.bg-grey {
  border-radius: 18px;
  margin: 3rem 0;
  background: $bg-grey;
  height: 400px;
  width: 100%;
  padding: 5rem 0;
  background-image: url('https://i.pinimg.com/originals/be/2a/94/be2a940c4ac312bf5abc0aa9677749de.jpg');
  background-size: cover;
}

.quotes-wrapper {
  margin-bottom: 3rem;
}

.social-media-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* fade transition */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
  transition-delay: 0.5;
}

/* float down transition */
.float-down-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.float-down-leave-to {
  transform: translateY(50px);
}

.float-down-enter-active,
.float-down-leave-active {
  transition: all 1s ease;
}

/* button transition */
.button-enter-active,
.button-leave-active {
  animation: vibrate 1s ease;
}

@keyframes vibrate {
  0% {transform: rotate(10deg);opacity: 0;}
  50% {transform: rotate(-5deg)}
  60% {transform: rotate(3deg)}
  70% {transform: rotate(-3deg)}
  80% {transform: rotate(1deg)}
  90% {transform: rotate(-1deg)}
  100% {transform: rotate(0deg)}
}

@media screen and (max-width: $desktop) {
  .bg-grey {
    position: relative;
    padding: 5rem 0;
    height: auto;
  }
}

@media screen and (max-width: $tablet) {
  .social-media-wrapper {
    justify-content: center;
  }
}

@media screen and (max-width: $mobile-S) {
  .introduction {
    .title h1{
      font-size: 7rem;
    }
  }
}
</style>
