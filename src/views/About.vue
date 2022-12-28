<template>
  <div id="about">
    <!-- <div class="title" id="profile">Profile</div> -->
    <!-- <div class="row about-banner">
      <transition name="float-down" appear>
        <div class="col-12 col-md-7 security-image-holder">
          <img src="@/assets/security.svg" alt="">
        </div>
      </transition>
      <div class="col-12 col-md-5 security-text">
        <h3>Ping me now!!</h3>
        <p>Find me on my social media platform. You will get surprised!!</p>
        <small class="remarks">*All personal information are kept private and confidential</small>
        <div class="social-media-wrapper">
          <SocialMedia />
        </div>
      </div>
    </div> -->

    <div id="programming">
      <Titles
        title="Programming Skills"
        subtitle="Fullstack programming languages and frameworks I expertized"
      />
      <SkillDetailWrapper />
    </div>

    <div id="interest">
      <Titles
        title="Interest & Hobby"
        subtitle="Sit back and relax during off working hours"
      />
      <InterestWrapper />
    </div>

    <div id="language">
      <Titles
        title="Languages"
        subtitle="Break the barrier between you and me"
      />
      <LanguageWrapper />
    </div>

    <Titles
      title="Follow Me"
      subtitle="Reach out anytime. I am just an inbox message away!"
    />
    <SocialMedia />
  </div>
</template>

<script>
import SocialMedia from "@/components/page_components/social-media.vue";
import InterestWrapper from "@/components/page_components/interests.vue";
import SkillDetailWrapper from "@/components/page_components/skill-detail.vue";
import LanguageWrapper from "@/components/page_components/languages.vue";
import AwardWrapper from "@/components/page_components/awards.vue";
import Titles from "../components/page_components/titles.vue";

export default {
  components: {
    SocialMedia,
    InterestWrapper,
    SkillDetailWrapper,
    LanguageWrapper,
    AwardWrapper,
    Titles,
  },
};
</script>

<style lang="scss" scoped>
#about {
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 3rem 0 1.5rem 0;
  }
}

.security-image-holder {
  img {
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
  }
}

.security-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3rem;
  text-align: end;
  padding: 0 30px;

  h3 {
    font-weight: bold;
    font-size: 48px;
    text-transform: uppercase;
  }

  .remarks {
    color: darkgrey;
  }
}

@media screen and (max-width: $tablet) {
  .about-banner {
    flex-direction: column-reverse;

    .security-text {
      text-align: center;

      .social-media-wrapper {
        justify-content: center;
      }
    }
  }
}
</style>
