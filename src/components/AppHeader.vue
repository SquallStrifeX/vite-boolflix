<script>
import { store } from '../store.js'
import axios from 'axios'
export default {
    name: 'AppHeader',
    data() {
        return {
            store,

            searchApi() {
        let ApiUrl = this.store.endpoint_film + this.store.search
        console.log(ApiUrl)

        axios.get(ApiUrl).then((response) => {
        this.store.searchResult_film = response.data.results
        console.log(this.store.searchResult_film)

        let ApiUrl_serietv = this.store.endpoint_serietv + this.store.search
        console.log(ApiUrl_serietv)

        axios.get(ApiUrl_serietv).then((response) => {
        this.store.searchResult_serietv = response.data.results
        console.log(this.store.searchResult_serietv)
        })})

      }
        }
    },
}
</script>

<template lang="">
    <header class="bg-black">
    <div class=" p-3 container ">
        <div class="row ">
            <div class="col-6 logo">
                BOOFLIX
            </div>
            <div class="col-3"></div>
            <div class="col-3">
                <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="store.search" @keyup.enter="searchApi()" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
</div>
</div>
    </div>
    </header>
</template>

<style lang="scss" scoped>
.logo{
    color: red;
    font-size: 30px;
}
    
</style>