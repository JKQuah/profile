<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 faq-title">
        <h1 class="title">Get <br> In Touch</h1>
      </div>
      <transition name="float-down" appear>
        <div class="col-12 col-md-6 faq-image-holder">
          <img src="@/assets/contact_us.svg" alt="">
        </div>
      </transition>
    </div>
    <div class="row my-5">
      <p class="text-center">* Currently only Gmail is available.</p>
      <div class="col-6 col-sm-3 contact-wrapper whatsapp" @click="navigateToWhatsapp">
        <h5 class="title">WhatsApp</h5>
      </div>
      <div class="col-6 col-sm-3 contact-wrapper gmail" @click="navigateToGmail">
        <h5 class="title">Gmail</h5>
      </div>
      <div class="col-6 col-sm-3 contact-wrapper messenger" @click="navigateToMessenger">
        <h5 class="title">Messager</h5>
      </div>
      <div class="col-6 col-sm-3 contact-wrapper telegram" @click="navigateToTelegram">
        <h5 class="title">Telegram</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gmail: "kobekai1997@gmail.com",
    }
  },
  methods: {
    navigateToGmail: function() {
      window.location.href = 'mailto:' + this.gmail + '?subject=Job Enquiry&body=[Please attach together with the job description]'
    },
  }
}
</script>

<style lang="scss" sccoped>
.faq-title {
  position: relative;

  .title {
    font-weight: bold;
    font-size: 96px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 10px solid transparent;
  }
}
.faq-image-holder {
  img {
    width: 100%;
    height: auto;
    margin: 2rem 0 0 -5rem;
  }
}

.contact-wrapper {
  border-right: 2px solid $dark-blue;
  
  .title {
    text-align: end;
    width: 100%;
    padding-top: 75%;
    position: relative;
  }

  &.whatsapp {
    background: $bg-grey url('../assets/contact-icon/whatsapp.png') no-repeat center;
    background-size: 50%;
    filter: grayscale(1);
  }

  &.gmail {
    background: $bg-grey url('../assets/contact-icon/gmail.png') no-repeat center;
    background-size: 50%;
    filter: grayscale(1);
  }

  &.messenger {
    background: $bg-grey url('../assets/contact-icon/messenger.png') no-repeat center;
    background-size: 50%;
    filter: grayscale(1);
  }

  &.telegram {
    background: $bg-grey url('../assets/contact-icon/telegram.png') no-repeat center;
    background-size: 50%;
    filter: grayscale(1);
  }

  &:hover {
    filter: none;
    background-color: $light-yellow;
    background-size: 100%;
    transition: 0.5s ease-in;
    cursor: pointer;
    
    .title {
      font-size: 24px;
      font-weight: bold;
      color: $dark-green;
    }
  }
}

@media screen and (max-width: $tablet) {
  .faq-title {
    display: none;
    .title {
      font-size: 10vw;
    }
  }

  .faq-image-holder {
    img {
      margin: 2rem 0 0 0;
    }
  }
}

@media screen and (max-width: $mobile-L) {
  .contact-wrapper {
    .title {
      text-align: center;
      font-size: 1rem;
      margin: 1rem 0;
    }
  }
}
</style>