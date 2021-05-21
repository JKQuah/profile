<template>
  <!-- <div class="container text-left">
    <h4 class="title">App Colors</h4>
    <div class="color primary"><span>Primary</span><span>#00bbf9</span></div>
    <div class="color secondary">Secondary</div>
    <div class="color success">Success</div>
    <div class="color danger">Danger</div>
    <div class="color alert">Alert</div>
    <div class="color info">Info</div>
  </div> -->
  <div class="container">
    <h4 class="title">Main Colors</h4>
    <div class="main dark-blue">Dark Blue<span class="float-end">#05386B</span></div>
    <div class="main dark-green">Dark Green<span class="float-end">#379683</span></div>
    <div class="main accent-green">Accent Green<span class="float-end">#5CDB95</span></div>
    <div class="main light-green">Light Green<span class="float-end">#8EE4AF</span></div>
    <div class="main light-yellow">Light Yellow<span class="float-end">#EDF5E1</span></div>
  </div>
  <div class="container">
    <h4 class="title">Switch Buttons</h4>
    <!-- Rounded switch -->
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>


</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-left {
  text-align: left;
}

.title {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccccccd6;
    font-weight: bold;
}

.color {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;

  &.primary {
    background-color: $primary;
  }

  &.secondary {
    background-color: $secondary;
  }

  &.alert {
    background-color: $alert;
  }

  &.danger {
    background-color: $danger;
  }

  &.info {
    background-color: $info;
  }

  &.success {
      background-color: $success;
  }
}

.main {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-weight: bold;

  &.dark-blue {
    background-color: $dark-blue;
    color: $light-yellow
  }

  &.dark-green {
    background-color: $dark-green;
  }

  &.accent-green {
    background-color: $accent-green;
  }

  &.light-green {
    background-color: $light-green;
  }

  &.light-yellow {
    background-color: $light-yellow;
  }
}

/* The switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
}

input {
  &:checked + .slider {
    background-color: $accent-green;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px $dark-green;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;

  &:before {
    border-radius: 50%;
  }
}
</style>