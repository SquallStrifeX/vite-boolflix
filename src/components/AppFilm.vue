<script>
  import { store } from '../store.js'
  import axios from 'axios'
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
      genre_id() {
        axios.get(store.endpoint_genre_id).then((response) => {
          this.store.genre_id = response.data.genres;
          console.log(this.store.genre_id);

        });
        
      },
      credits(movie_id) {
        store.endpoint_credits = 'https://api.themoviedb.org/3/movie/' + movie_id + '/credits?api_key=e99307154c6dfb0b4750f6603256716d' 
        console.log(this.store.endpoint_credits);
        axios.get(this.store.endpoint_credits).then((response) => {
          this.store.credits = response.data.cast;
          console.log(this.store.credits)
         

        });
        
      },
    },
    mounted() {
      // Chiamare la funzione genre_id all'avvio della pagina
      this.genre_id();+
      this.credits();
    },
  };
</script>

<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-3 mt-5" v-for="(film, index) in store.searchResult_film" :key="index" >
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="img-fluid" :src=" store.poster + film.poster_path" alt="">
    </div>
    <div class="flip-card-back">
      <div v-if="this.store.filmCredits">
  {{ credits(film.id) }}
</div>
      <div class="title">{{ film.title}}</div>
    <div class="original_title m-3">  {{ film.original_title}}</div>
       <div><img class="flag m-3" :src="'/src/img/' + film.original_language + '.png'" alt=""></div> 
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
    <div v-for="(genre, index) in store.genre_id" :key="index">
    <div v-if="(genre.id == film.genre_ids[0])">{{genre.name}}</div>
    <div v-if="(genre.id == film.genre_ids[1])">{{genre.name}}</div>
    <div v-if="(genre.id == film.genre_ids[2])">{{genre.name}}</div>
    <div v-if="(genre.id == film.genre_ids[3])">{{genre.name}}</div>
    <div v-if="(genre.id == film.genre_ids[4])">{{genre.name}}</div>
  <div v-if="credits.id === film.id">
    <div v-for="(actor, actorIndex) in credits" :key="actorIndex">
      <div>{{ actor.name }}</div>
    </div>
  </div>
</div>

  </div>
    </div>
  </div>
</div>
    <div> 
    </div>
      </div>
    </div>
  </div>
  
  <div class="container"> 
    <h1 class="text-center m-5">SERIE TV</h1>
    <div class="row">
      <div class="col-3 mt-5" v-for="(serietv, index) in store.searchResult_serietv" :key="index">
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="img-fluid" :src=" store.poster + serietv.poster_path" alt="">
    </div>
    <div class="flip-card-back">
      <div class="title">{{ serietv.name}}</div>
    <div class="original_title m-3">  {{ serietv.original_name}}</div>
       <div><img class="flag m-3" :src="'/src/img/' + serietv.original_language + '.png'" alt=""></div> 
   <i v-if="generateStars( serietv.vote_average ) >= 1" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( serietv.vote_average ) >= 2" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( serietv.vote_average ) >= 3" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( serietv.vote_average ) >= 4" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
   <i v-if="generateStars( serietv.vote_average ) >= 5" class="fa-solid fa-star"></i>
    <i v-else class="fa-regular fa-star"></i>
    </div>
  </div>
</div>
    <div> 
    </div>
      </div>
    </div>
  </div>
         
</template>

<style lang="scss" scoped>
.title{
  font-size: 20px;
  margin-top: 20px
}

.original_title{
  font-size: 10px;
  margin-top: 10px
}
    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  border: 1px solid #f1f1f1;
  height: 450px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

.flag{
  width: 30px;
  height: 20px;
}
</style>