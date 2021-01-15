<template>
  <div class="movie-details">
    <router-link to="/">
      <h2 class="movie-details__heading">Back to main page</h2>
    </router-link>
    <div class="movie-details__card">
      <img
        :src="imagePath + movie.poster_path"
        alt="Movie logo"
        class="movie-details__img"
      >
      <div class="movie-details__info">
        <h2 class="movie-details__title">{{ movie.title }}</h2>
        <p class="movie-details__description">{{ movie.overview }}</p>
        <span class="movie-details__date">Release date: {{ movie.release_date }}</span>
        <span class="movie-details__rating">Rating: {{ movie.vote_average }}</span>
        <span class="movie-details__popularity">Popularity: {{ movie.popularity }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { API_KEY, BASE_URL } from '@/api/api.js'


export default {
  data() {
    return {
      imagePath: 'https://image.tmdb.org/t/p/w500/',
      movie: {},
    }
  },
  mounted() {
    const route = useRoute();

    fetch(`${BASE_URL}${route.params.id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.movie = data;
      })
  }
}
</script>

<style>
  .movie-details {
    padding-left: 20px;
  }

  .movie-details__heading {
    margin-bottom: 20px;
    color: #42B883;
  }

  .movie-details__card {
    display: flex;
    width: 50%;
    padding: 20px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 5px 5px 15px 5px #000000;
    color: rgb(75, 75, 75);
  }

  .movie-details__info {
    padding-left: 20px;
  }

  .movie-details__title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .movie-details__description {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.5;
  }

  span {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
  }
</style>