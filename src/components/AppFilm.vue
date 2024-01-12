<script>
import { store } from '../store.js'

export default {
data() {
    return {
        store,
    }
},
}
</script>

<template lang="">
    <div class="m-5" v-for="(film, index) in store.searchResult" :key="index"> 
         <div> Title: {{ film.title}}</div>
    <div> Original Title: {{ film.original_title}}</div>
    <div> original_language: {{ film.original_language}}</div>
    <div> vote_average: {{ film.vote_average}}</div>
    </div>
</template>

<style lang="">
    
</style>