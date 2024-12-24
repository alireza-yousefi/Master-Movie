<template>
    <div class="min-h-screen pb-4">
        <div class="fixed w-full bg-gray-800 h-14 top-0 flex justify-between z-10 text-white text-3xl">
      <span class="pt-3 px-6" style="font-family: fantasy;">MASTER MOVIE</span>
      <div class="pt-2 justify-start px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336" />
        </svg>
      </div>
    </div>
      <!-- اسلایدر بالای صفحه -->
      <div v-if="sliderMovies.length > 0" class="mb-6 pt-14 z-20">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
          class="mySwiper mt-4"
        >
          <swiper-slide v-for="(movie, index) in sliderMovies" :key="index">
            <CardsMovie :movie="movie" />
          </swiper-slide>
        </swiper>
      </div>
  
      <!-- لیست ژانرها -->
      <div v-if="genres.length > 0" class="px-4">
        <h2 class="text-2xl font-semibold text-center mt-4">Genres</h2>
        <div v-for="(genre, index) in genres" :key="index" class="mb-8">
            <Nuxt-Link :to="`/genre/${genre.id}`" class="justify-between flex mt-6 mb-4">
          <div  class="text-xl font-bold ">{{ genre.name }}</div>
            <div>see more</div>

          </Nuxt-Link>
          <!-- نمایش فیلم‌های هر ژانر به صورت کشویی -->
          <div class="flex gap-4 overflow-x-auto scrollbar-hide mt-3 overflow-y-hidden">
            <div
              v-for="(movie, idx) in genre.movies"
              :key="idx"
              class="shrink-0 w-40"
            >
              <CardsMovie :movie="movie" :color="'text-white'" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- پیام خطا -->
      <div v-if="error" class="text-center text-red-500 mt-4">{{ error }}</div>
      <div class=" fixed w-full bg-gray-800 h-14 bottom-0 flex justify-between px-8 pt-1">
      <nuxt-link to="/search" class="items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
        </svg>
      </nuxt-link>
      <nuxt-link to="/" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
          <path fill="#fff" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
        </svg>
      </nuxt-link>
      <nuxt-link to="/favorite" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
          <path fill="#fff" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" />
        </svg>
      </nuxt-link>
    </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { Pagination } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  
  // داده‌ها
  const sliderMovies = ref<Array<any>>([]);
  const genres = ref<Array<{ id: number; name: string; movies: Array<any> }>>([]);
  const error = ref<string | null>(null);
  
  // تابع گرفتن داده‌ها
  const fetchData = async () => {
    try {
      // گرفتن ژانرها
      const genresResponse = await axios.get("http://moviesapi.ir/api/v1/genres");
  
      // داده‌های ژانرها به صورت آرایه است، بنابراین نیاز به استفاده از JSON.parse نیست
      const allGenres = genresResponse.data || [];
  
      if (allGenres.length === 0) {
        error.value = "No genres found.";
        return;
      }
  
      // انتخاب ژانر رندوم برای اسلایدر
      const randomGenreIndex = Math.floor(Math.random() * allGenres.length);
      const randomGenre = allGenres[randomGenreIndex];
      const sliderResponse = await axios.get(
        `http://moviesapi.ir/api/v1/genres/${randomGenre.id}/movies?page=1`
      );
      sliderMovies.value = sliderResponse.data.data;
  
      // دریافت فیلم‌های هر ژانر
      for (const genre of allGenres) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // تاخیر نیم ثانیه‌ای
        const moviesResponse = await axios.get(
          `http://moviesapi.ir/api/v1/genres/${genre.id}/movies?page=1`
        );
        genres.value.push({
          id: genre.id,
          name: genre.name || `Genre ${genre.id}`, // نمایش نام ژانر
          movies: moviesResponse.data.data,
        });
      }
    } catch (err) {
      error.value = "Failed to load genres and movies.";
      console.error(err);
    }
  };
  
  // بارگذاری داده‌ها
  onMounted(fetchData);
  </script>
  
  <style scoped>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  /* تنظیمات اسلایدر */
  .swiper {
    width: 100%;
    height: 300px;
  }
  </style>
  