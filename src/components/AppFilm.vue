<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    generateStars(voteAverage) {
      // Arrotonda il voto alla cifra intera più vicina e poi divide per 2
      const stars = Math.floor(voteAverage) / 2;
      return stars;
    },
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
    <div class="d_flex">
        <ul class="d_flex" style="flex-direction: row;">
   <i v-if="generateStars( film.vote_average ) >= 1" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( film.vote_average ) >= 2" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( film.vote_average ) >= 3" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( film.vote_average ) >= 4" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( film.vote_average ) >= 5" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
</ul>
    </div>
 </div>
   <h1>SERIE TV</h1>
    <div class="m-5" v-for="(serietv, index) in store.searchResult_serietv" :key="index"> 
          
         <div> Title: {{ serietv.name}}</div>
    <div> Original Title: {{ serietv.original_name}}</div>
    <div> original_language: {{ serietv.original_language}}
        <img :src="'/src/img/' + serietv.original_language + '.png'" alt="">
    </div>
    <div> vote_average: {{ serietv.vote_average}}</div>
    <div> <img :src=" store.poster + serietv.poster_path" alt=""></div>
    </div>
</template>

<style lang="">
    
</style>