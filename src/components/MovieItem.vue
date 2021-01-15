<template>
  <li class="movie-list__item">
    <router-link :to="'/movie/' + movie.id" class="movie-list__link">
      <img
        :src="imagePath + movie.backdrop_path"
        alt="Movie logo"
        class="movie-list__img"
      >
      <p class="movie-list__title">
        {{ movie.title }}
      </p>
      <span class="movie-list__info">Read more...</span>
    </router-link>
    <button
      type="button"
      class="btn btn-add"
      @click="$emit('add-movie')"
    >
      Add to favorite
    </button>
  </li>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imagePath: 'https://image.tmdb.org/t/p/w500/',
    }
  },
}
</script>

<style>
  .movie-list__item {
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 5px 5px 15px 5px #000000;
  }

  .movie-list__link {
    color: rgb(75, 75, 75);
  }

  .movie-list__img {
    margin-bottom: 10px;
  }

  .movie-list__title {
    margin-bottom: 10px;
    font-size: 20px;
  }

   .movie-list__info {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .movie-list__control {
    margin-left: auto;
    margin-top: auto;
  }

  .btn {
    border: 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    color: white;
    outline: none;
    transition: background 0.2s linear;
  }

  .btn-add {
    margin-right: 10px;
    background-color: #42B883;
  }

  .btn-add:hover {
    background-color: #3B8070;
  }

  .btn-remove {
    background-color: red;
  }

   .btn-remove:hover {
    background-color: rgb(200, 0, 0);
  }
</style>