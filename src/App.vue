<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppFilm from './components/AppFilm.vue'
import AppSerie from './components/AppSerie.vue'


export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppFilm,
    AppSerie,
  }
}
</script>
<template lang="">
  <AppHeader></AppHeader>
  <AppFilm></AppFilm>
  <AppSerie></AppSerie>
</template>

<style lang="scss" scoped>
  
</style>