<script>
import { store } from '../store.js'
import axios from 'axios'
export default {
    name: 'AppHeader',
    data() {
        return {
            store,

            searchApi() {
        let ApiUrl = this.store.endpoint + this.store.search
        console.log(ApiUrl)

        axios.get(ApiUrl).then((response) => {
        this.store.searchResult = response.data.results
        console.log(this.store.searchResult)
      })
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