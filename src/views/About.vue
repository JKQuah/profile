<template>
  <div id="about">
    <div class="title" id="profile">Profile</div>
    <div class="row about-banner">
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
    </div>

    <div class="title" id="programming">Programming Skills</div>
    <SkillDetailWrapper />

    <div class="title" id="interest">Interest & Hobby</div>
    <InterestWrapper />

    <div class="title" id="language">Language</div>
    <LanguageWrapper />

    <div class="title" id="awards">Awards & Certificates</div>
    <AwardWrapper />

  </div>
</template>

<script>
import SocialMedia from '@/components/page_components/social-media.vue'
import InterestWrapper from '@/components/page_components/interests.vue'
import SkillDetailWrapper from '@/components/page_components/skill-detail.vue'
import LanguageWrapper from '@/components/page_components/languages.vue'
import AwardWrapper from '@/components/page_components/awards.vue'


export default {
  components: {
    SocialMedia,
    InterestWrapper,
    SkillDetailWrapper,
    LanguageWrapper,
    AwardWrapper
  }
}
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
