<template>
    <div class="flex-shrink-0 px-3 sidebar">
      <a href="/" class="d-flex align-items-center justify-content-center py-3 mb-3 text-decoration-none border-bottom">
        <img src="../assets/logo.png" alt="logo-sidebar" width="100px" height="100px">
      </a>
      <ul class="list-unstyled ps-2">
        <li class="mb-1">
          <a href="#" class="btn align-items-center mb-2 w-100" :class="{active: isSchedule}">Schedule send</a>
        </li>
        <li class="mb-1">
          <a href="#" class="btn align-items-center mb-2 w-100" :class="{active: isMessage}">Message content</a>
        </li>
        <li class="mb-1">
          <a href="#" class="btn align-items-center mb-2 w-100" :class="{active: isSegment}">Segment list</a>
        </li>
        <li class="mb-1">
          <a href="#" class="btn align-items-center mb-2 w-100" :class="{active: isChat}">Chat box</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
      isSchedule: Boolean,
      isMessage: Boolean,
      isSegment: Boolean,
      isChat: Boolean,
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 93vh;
  background: #fff;
}
li > a {
  text-align: left !important;
  font-weight: 400 !important;
  font-size: 1.2rem;
  &:hover{
    background: #da5f9c;
    color: #fff;
  }
  &:focus, &:active {
    box-shadow: none;
  }
}
.active {
  background: #da5f9c;
  color: #fff;
}
</style>