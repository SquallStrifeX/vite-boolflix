import { reactive } from 'vue';
export const store = reactive({
    endpoint_film: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&&language=it-IT&query=',
    endpoint_serietv: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=',
    poster: 'http://image.tmdb.org/t/p/w500/',
    star: '',
    searchResult_film: '',
    searchResult_serietv: '',
    search: ''
})