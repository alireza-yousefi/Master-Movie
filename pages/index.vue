<template>
  <div class="min-h-screen overflow-scroll">
   <!-- هدر -->
   <div class="fixed w-full bg-gray-800 h-14 top-0 flex justify-between text-white text-3xl">
      <span class="pt-3 px-6" style="font-family: fantasy;">MASTER MOVIE</span>
      <div class="pt-2 justify-start px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336" />
        </svg>
      </div>
    </div>

    <!-- محتوای اصلی -->
    <div class="p-4 pt-20 pb-20">
      <!-- نمایش پیام خطا -->
      <div v-if="error" class="text-red-500">{{ error }}</div>

      <!-- نمایش کارت‌های ژانرها -->




      <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardsGenre v-for="item in genres" :key="item.id" :genre="item"/>

      </div>
    </div>
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
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// متغیرها
const genres = ref([]);
const error = ref(null);
const router = useRouter();

// دریافت داده‌های ژانرها
const fetchGenres = async () => {
  try {
    const response = await axios.get("http://moviesapi.ir/api/v1/genres");
    genres.value = response.data;
  } catch (err) {
    error.value = "خطا در دریافت اطلاعات ژانرها";
    console.error(err);
  }
};

// اجرا در زمان بارگذاری
onMounted(fetchGenres);
</script>
