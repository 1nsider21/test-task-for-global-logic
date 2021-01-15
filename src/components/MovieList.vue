<template>
  <ul class="movie-list">
    <MovieItem
      v-for="movie in popularMovies"
      :movie="movie"
      :key="movie.id"
      @add-movie="addMovie(movie.id)"
    />
  </ul>
</template>

<script>
import MovieItem from '@/components/MovieItem';
export default {
  name: 'MovieList',
  props: ['popular-movies'],
  components: {
    MovieItem,
  },
  methods: {
    addMovie(id) {
      this.$emit('add-movie', id);
    },
  }
}
</script>

<style>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>