<script setup>
const props = defineProps({
    movie : {
        type : Object,
        required : true,
    },
    color : {
        type: String,
        required : true,
    }
})
</script>


<template>
    <nuxt-link :to="`/movies/${movie.id}`" class=" shadow-md rounded-lg py-4 text-center hover:bg-blue-100 transition cursor-pointer">
          <img :src="movie.poster" alt="Movie Poster" class="h-40 w-full object-cover rounded-md mb-2" />
          <p class="text-lg font-semibold" :class="props.color">{{ movie.title }}</p>
          <p class="text-sm text-gray-500">IMDB: {{ movie.imdb_rating }}</p>
          <p class="text-sm text-gray-500">Year: {{ movie.year }}</p>
        </nuxt-link>
</template>


