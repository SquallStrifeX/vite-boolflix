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
    <div class="m-5" v-for="(film, index) in store.searchResult_film" :key="index"> 
         <div> Title: {{ film.title}}</div>
    <div> Original Title: {{ film.original_title}}</div>
    <div> original_language: {{ film.original_language}}
        <img :src="'/src/img/' + film.original_language + '.png'" alt="">
    </div>
    <div> vote_average: {{ film.vote_average}}</div>
    </div>
   <h1>SERIE TV</h1>
    <div class="m-5" v-for="(serietv, index) in store.searchResult_serietv" :key="index"> 
          
         <div> Title: {{ serietv.name}}</div>
    <div> Original Title: {{ serietv.original_name}}</div>
    <div> original_language: {{ serietv.original_language}}
        <img :src="'/src/img/' + serietv.original_language + '.png'" alt="">
    </div>
    <div> vote_average: {{ serietv.vote_average}}</div>
    </div>
</template>

<style lang="">
    
</style>