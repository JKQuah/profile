<template>
  <div class="row working-timer" id="experience">
    <div class="col-12 col-md-6 divider">
      <div class="title">Working Experience</div>
      <div class="working-list" v-for="job in jobs" :key="job.id">
        <div class="row">
          <div class="col-6 col-md-6 fw-bold job-title">{{ job.title }}</div>
          <div class="col-6 col-md-6 fw-bold text-end">{{ job.date }}</div>
        </div>
        <div class="row">
          <div class="col-6 col-md-6">{{ job.company }}</div>
          <div class="col-6 col-md-6 text-end">{{ job.duration }}</div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 counter-wrapper">
      <h6 class="title">Total Working Hour</h6>
      <div class="row">
        <!-- Years -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.year }}</div>
            <div class="col-12 unit">Years</div>
          </div>
        </div>
        <!-- Months -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.month }}</div>
            <div class="col-12 unit">Months</div>
          </div>
        </div>
        <!-- Days -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.day }}</div>
            <div class="col-12 unit">Days</div>
          </div>
        </div>
        <div class="col-12 breakline"></div>
        <!-- Hours -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.hour }}</div>
            <div class="col-12 unit">Hours</div>
          </div>
        </div>
        :
        <!-- Minutes -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.minute }}</div>
            <div class="col-12 unit">Minutes</div>
          </div>
        </div>
        :
        <!-- Seconds -->
        <div class="col">
          <div class="row">
            <div class="col-12 time">{{ getTotalWorkingHour.second }}</div>
            <div class="col-12 unit">Seconds</div>
          </div>
        </div>
        <!-- End -->
      </div>
      <p class="company-name">at Sinegy Dax Sdn Bhd</p>
      <p class="position-name">as Software Developer</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data:() => {
    return {
      jobs: [
        { id: 1, title: "Software Intern", company: "Keysight Technologies", date: "Aug 2019 - Jan 2020", duration: "6 months", isPresent: false },
        { id: 2, title: "Frontend Intern", company: "Lazy Technologies (Hong Kong)", date: "July 2020 - October 2020", duration: "4 months", isPresent: false },
        { id: 3, title: "Software Developer", company: "Sinegy Dax", date: "Feb 2021 - Present", duration: "", isPresent: true }
      ],
      working_hour: {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
    }
  },
  created: function() {
    this.setTotalWorkingHour()
  },
  computed: {
    getTotalWorkingHour: function() {
      return this.working_hour;
    }
  },
  mounted() {
    setInterval(() => {
      this.setTotalWorkingHour()
    }, 1000);
  },
  methods: {
    setTotalWorkingHour: function() {
      const year = 2021;
      const month = 1;
      const day = 15;
      const hour = 9
      const minute = 0;
      const second = 0;
      let start = moment([year, month, day, hour, minute, second]);
      let now = moment();

      this.working_hour.year = now.diff(start, 'years')
      start.add(this.working_hour.year, 'years')
      this.working_hour.month = now.diff(start, 'months')
      start.add(this.working_hour.month, 'months')
      this.working_hour.day = now.diff(start, 'days')
      start.add(this.working_hour.day, 'days')
      this.working_hour.hour = now.diff(start, 'hours')
      start.add(this.working_hour.hour, 'hours')
      this.working_hour.minute = now.diff(start, 'minutes')
      start.add(this.working_hour.minute, 'minutes')
      this.working_hour.second = now.diff(start, 'seconds')
    }
  }
};
</script>

<style lang="scss">
.working-timer {
  width: 100%;
  
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1.5rem
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  .time {
    font-size: 24px;
  }

  .unit {
    font-weight: bold;
  }

  .breakline {
    display: none;
  }

  .divider {
    border-right: 1px solid darkgray
  }

  .counter-wrapper {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .company-name {
    margin: 1rem 0;
    font-size: 16px;
  }

  .position-name {
    font-size: 14px;
  }
}

.working-list {
  border-left: 5px solid $dark-green;
  padding-left: 0.5rem;
  margin-bottom: 1.2rem;

  .job-title{
    font-size: 18px;
  }
}

.image-holder {
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: auto;
    opacity: 0.1;
    filter: grayscale(1);
    z-index: 2;
  }
}

@media screen and (max-width: $mobile-L){
  .working-timer {
    .breakline {
      display: block;
    }
  }
}

@media screen and (max-width: $tablet) {
  .working-timer {
    .divider {
      border-right: 0
    }

    .counter-wrapper {
      margin-top: 3rem;
    }
  }
}
</style>