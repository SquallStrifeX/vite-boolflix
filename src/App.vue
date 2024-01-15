<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppFilm from './components/AppFilm.vue'



export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppFilm,
  }
}
</script>
<template lang="">
  <AppHeader></AppHeader>
  <AppFilm></AppFilm>
</template>

<style lang="scss" scoped>
  
</style>