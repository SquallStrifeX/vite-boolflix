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
    <div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="store.search">
  <button class="btn btn-success" @click="searchApi()">ammacca me fra</button>
</div>
    </div>
</template>

<style lang="">
    
</style>