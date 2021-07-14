<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 15px;
}

.btn-primary {
  background: #C80064 !important;
  color: #fff !important;
  border: none !important;
}

.btn, .accordion-button {
  &:focus, &:active {
    box-shadow: none !important;
    // border-color: #C80064 !important;
  }
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
  --bs-gutter-x: 0px !important;
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
box-shadow: none;
outline: 0 none;
}
</style>
