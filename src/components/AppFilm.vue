<script>
import { store } from '../store.js'

export default {
data() {
    return {
        store,

        flags(){
        console.log(store.searchResult)}
    }
},
}
</script>

<template lang="">
    <div class="m-5" v-for="(film, index) in store.searchResult" :key="index"> 
         <div> Title: {{ film.title}}</div>
    <div> Original Title: {{ film.original_title}}</div>
    <div> original_language: {{ film.original_language}}
        <img :src="'/src/img/' + film.original_language + '.png'" alt="">
    </div>
    <div> vote_average: {{ film.vote_average}}</div>
    </div>
</template>

<style lang="">
    
</style>