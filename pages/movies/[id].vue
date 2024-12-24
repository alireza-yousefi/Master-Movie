<template>
    <div class=" p-4 bg-gray-500">
      <div v-if="loading" class="text-center text-gray-500 mt-48">Loading...</div>
  
      <div v-else-if="movie" class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row  rounded-lg shadow-lg overflow-hidden">
            <div>
                <h1 class="text-3xl font-semibold text-white text-center py-2" style="    font-family: monospace;">{{ movie.title }}</h1>
            </div>
            <img :src="movie.poster" alt="Poster" class=" fixed top-9 left-0 h-full opacity-5 justify-self-center w-full  shadow-lg object-cover" />

            <div class="items-center w-full z-50">
          <img :src="movie.poster" alt="Poster" class="w-3/4  justify-self-center rounded-2xl h-1/2 shadow-lg object-cover" />



        </div>

<div class="flex rtl mt-4 justify-between">
  <div class="rtl mr-8 " @click="toggleFavorite">
  <!-- قلب خالی -->
  <UIcon 
    name="material-symbols:favorite-outline" 
    class="w-10 h-10" 
    v-if="!isFavorite" 
    alt="Favorite Icon" 
  />
  <!-- قلب پر -->
  <UIcon 
    name="material-symbols:favorite" 
    class="w-10 h-10" 
    v-if="isFavorite" 
    alt="Favorite Icon" 
  />
</div>
<div class=" text-yellow-500 ml-8 text-end">
              <p><strong>IMDB:</strong> {{ movie.imdb_rating }} ({{ movie.imdb_votes }} votes)</p>
              <p class=" text-sm">Year: {{ movie.year }} | Rated: {{ movie.rated }}</p>

            </div>  
</div>


          <div class="p-6  text-white z-50">
          
            <p><strong>Genres:</strong> <span v-for="(genre, index) in movie.genres" :key="index">{{ genre }}{{ index < movie.genres.length - 1 ? ', ' : '' }}</span></p>

            <div class=" mt-4">
            <span class="font-bold"> discription:<br>
                 </span>
                <span>{{ movie.plot }}</span>
        </div>
            <div class="mt-4">
              <p><strong>Director:</strong> {{ movie.director }}</p>
              <p><strong>Writer:</strong> {{ movie.writer }}</p>
              <p><strong>Actors:</strong> {{ movie.actors }}</p>
              <p><strong>Country:</strong> {{ movie.country }}</p>
              <p><strong>Awards:</strong> {{ movie.awards }}</p>
              <p><strong>Metascore:</strong> {{ movie.metascore }}</p>
            </div>
  

          </div>
        </div>
  
        <div class="mt-6 ">
          <div class="mt-6">
        <!-- <h2 class="text-2xl font-semibold text-white mb-4">Images</h2> -->
        <div id="swiper-custom">
       <client-only>
        <swiper
    :slidesPerView="2"
    :spaceBetween="20"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper rounded-xl"
  >

  <swiper-slide v-for="(image, index) in movie.images" :key="index" class="">
            <img :src="image" alt="Movie Image" class="w-full rounded-xl  shadow-md" />
          </swiper-slide>

  </swiper>
</client-only>

</div>


      </div>
        </div>
      </div>
  
      <!-- اگر فیلمی پیدا نشد -->
      <div v-else class="text-center text-gray-500">فیلمی یافت نشد</div>
  
      <!-- پیام خطا -->
      <div v-if="error" class="text-center text-red-500 mt-4">{{ error }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

   // Import Swiper Vue.js components
   import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

  // تنظیمات برای ماژول‌های اسلایدر
const modules = [EffectCoverflow, Pagination];
const coverflowEffect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
};
  const route = useRoute();
  const movieId = route.params.id as string; // دریافت movie_id از URL
  const movie = ref<any | null>(null);
  const loading = ref<boolean>(true); // وضعیت بارگذاری
  const error = ref<string | null>(null);
    const isFavorite = ref<boolean>(false); // وضعیت علاقه‌مندی فیلم
  
  // تابع برای دریافت اطلاعات فیلم
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`http://moviesapi.ir/api/v1/movies/${movieId}`);
      movie.value = response.data;
    } catch (err) {
      error.value = "خطا در دریافت اطلاعات فیلم";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  // بررسی وضعیت فیلم در localStorage
const checkFavoriteStatus = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  isFavorite.value = favorites.includes(movieId);
};

// تابع تغییر وضعیت علاقه‌مندی
const toggleFavorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (isFavorite.value) {
    // حذف فیلم از لیست علاقه‌مندی
    const updatedFavorites = favorites.filter((id: string) => id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    localStorage.removeItem(movieId); // حذف فیلم از localStorage
  } else {
    // افزودن فیلم به لیست علاقه‌مندی
    favorites.push(movieId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem(movieId, JSON.stringify(movie.value)); // ذخیره‌سازی اطلاعات کامل فیلم
  }

  isFavorite.value = !isFavorite.value; // تغییر وضعیت قلب
};

// اجرای بررسی هنگام لود صفحه
onMounted(async () => {
  await fetchMovieDetails(); // فراخوانی اطلاعات فیلم
  checkFavoriteStatus(); // بررسی وضعیت علاقه‌مندی
});
  </script>
  
  <style scoped>
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.rtl{
  direction: rtl;
}

</style>

<style>
#swiper-custom .swiper-pagination-bullet-active {
    background: white;
}

#swiper-custom .swiper-slide{
  text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
}
#swiper-custom .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, 8px);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
    bottom: 0;
}
</style>