<template>
  <div class="favorite-movies">
    <h2
      class="favorite-movies__heading"
      v-if="!favoriteMovies.length"
    >
      Favorite list is empty
    </h2>
    <h2 class="favorite-movies__heading" v-else>Favorite list:</h2>
    <ul class="favorite-movies__list">
      <li
      class="favorite-movies__item"
        v-for="movie in favoriteMovies"
        :key="movie.id"
      >
        <img
          :src="imagePath + movie.backdrop_path"
          alt="Movie logo"
          class="favorite-movies__img"
        >
        <p class="favorite-movies__title">{{ movie.title }}</p>
        <button
          type="button"
          class="btn btn-remove"
          @click="removeMovie(movie.id)"
        >
          Remove from favorite
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FavoriteMovies',
  props: ['favorite-movies'],
  data() {
    return {
      imagePath: 'https://image.tmdb.org/t/p/w500/',
    }
  },
  methods: {
    removeMovie(id) {
      console.log(id);
      this.$emit('remove-movie', id);
    }
  }
}
</script>

<style>
  .favorite-movies {
    padding-left: 20px;
    width: 40%;
  }

  .favorite-movies__heading {
    margin-bottom: 20px;
    font-size: 25px;
    color: #42B883;
  }

  .favorite-movies__list {
    display: flex;
    flex-wrap: wrap;
  }

  .favorite-movies__item {
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px #000000;
    color: rgb(75, 75, 75);
  }

  .favorite-movies__img {
    display: block;
    width: 350px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .favorite-movies__title {
    margin-bottom: 10px;
  }
</style>