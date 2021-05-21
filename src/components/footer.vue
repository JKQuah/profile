<template>
  <div class="footer">
    <div class="content">
      <div class="row">
        <!-- Social Media -->
        <div class="col-6 col-md-3">
          <h5 class="title">Follow Me</h5>
          <div class="social-media-wrapper">
            <SocialMedia />
          </div>
        </div>

        <!-- About -->
        <div class="col-6 col-md-3">
          <h5 class="title">About</h5>
          <ul class="footer-list-group">
            <li class="footer-list-item">
              <a href="/about#profile">Profile</a>
            </li>
            <li class="footer-list-item">
              <a href="/about#programming">Programming Skills</a>
            </li>
            <li class="footer-list-item">
              <a href="/about#interest">Interest & Hobby</a>
            </li>
            <li class="footer-list-item">
              <a href="/about#language">Language</a>
            </li>
            <li class="footer-list-item">
              <a href="/about#awards">Awards & Certificates</a>
            </li>
          </ul>
        </div>

        <!-- Project -->
        <div class="col-6 col-md-3">
          <h5 class="title">Project</h5>
          <ul class="footer-list-group">
            <li class="footer-list-item">
              <a href="/project#">Analytics Dashboard</a>
            </li>
            <li class="footer-list-item">
              <a href="/project#">Foody Mobile App</a>
            </li>
            <li class="footer-list-item">
              <a href="/project#">Beauty Forum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-banner">
      <small>This profile is powered by <span class="highlight">Vue 3</span> and designed by <span class="highlight">JK Quah</span> <i class="fas fa-heart"></i> | 2021</small>
    </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/page_components/social-media.vue";
export default {
  components: {
    SocialMedia,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $bg-grey;
  margin-top: 3rem;
  padding: 3rem 0 0 0;

  .content {
    margin: auto;
    max-width: $page-max-width;

    .title {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .social-media-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}

.footer-list-group {
  padding-left: 0;

  .footer-list-item {
    list-style: none;
    padding: 0.5rem 0;
  }

  a {
    color: $dark-blue;
    text-decoration: none;

    &:hover {
      color: $dark-green;
    }
  }
}

.footer-banner {
  padding: 0.75rem 0;
  text-align: center;
  font-size: 14px;
  background: $dark-blue;
  color: $light-yellow;

  .highlight {
    font-weight: bold;
    color: $accent-green; 
  }

}
</style>