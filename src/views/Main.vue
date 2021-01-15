<template>
  <form @submit.prevent="searchHandle" class="form">
    <input
      type="text"
      placeholder="What are you looking for?"
      v-model="search"
      class="form__input form__input-text"
    >
    <input
      type="submit"
      value="search"
      class="form__input form__input-submit"
    >
  </form>
  <div class="page-content">
    <div class="popular-movie">
      <h2 class="popular-movie__title">Popular movies list:</h2>
      <MovieList
      :popular-movies="popularMovies"
      @add-movie="addMovie"
    />
    </div>
    <FavoriteMovies
      :favorite-movies="favoriteMovies"
      @remove-movie="removeMovie"
    />
  </div>
</template>

<script>
import MovieList from '@/components/MovieList';
import FavoriteMovies from '@/components/FavoriteMovies';
import { getMovies } from '@/api/api';
import { API_KEY, searchPath } from '@/api/api'

export default {
  name: 'Main',
  components: {
    MovieList,
    FavoriteMovies,
  },
  data() {
    return {
      popularMovies: [],
      favoriteMovies: [],
      search: '',
    }
  },
  methods: {
    addMovie(id) {
      if (!this.favoriteMovies.some(item => item.id === id)) {
        this.favoriteMovies.push(this.popularMovies.find(item => item.id === id));
      }

      localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
    },
    removeMovie(id) {
      this.favoriteMovies = this.favoriteMovies.filter(item => item.id !== id);

      localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
    },
    searchHandle() {
      if (this.search !== '') {
        fetch(`${searchPath}api_key=${API_KEY}&query=${this.search}`)
          .then(respone => respone.json())
          .then(data => {
            this.popularMovies = data.results;
            this.search = '';
          })
      }
    },
  },
  mounted() {
    getMovies()
      .then(data => {
        this.popularMovies = data.results;
      });

    const data = localStorage.getItem('favoriteMovies');
    data ? this.favoriteMovies = JSON.parse(data) : null;
  },
}
</script>

<style>
  .form {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .form__input {
    height: 50px;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    background: none;
    outline: none;
    color: white;
    font-size: 20px;
  }

  .form__input-text {
    width: 520px;
    background-color: #496583;
  }

  .form__input-text::placeholder {
    color: #f3f3f3;
  }

  .form__input-submit {
    width: 200px;
    margin-left: 20px;
    background-color: #42B883;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .form__input-submit:active {
    background-color: #3B8070;
  }

  .page-content {
    display: flex;
  }

  .popular-movie {
    padding-left: 20px;
    width: 60%;
  }

  .popular-movie__title {
    margin-bottom: 20px;
    font-size: 25px;
    color: #42B883;
  }
</style>
