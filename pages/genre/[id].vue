<template>
  <div class="min-h-screen">
    <!-- هدر -->
    <div class="fixed w-full bg-gray-800 h-14 top-0 flex items-center text-white text-2xl">
      <span class="ml-4" style="font-family: fantasy;">Movies in {{ genreName }}</span>
    </div>

    <!-- محتوای اصلی -->
    <div class="p-4 pt-20 pb-20">
      <!-- نمایش پیام خطا -->
      <div v-if="error" class="text-red-500">{{ error }}</div>

      <!-- نمایش فیلم‌ها -->
      <div v-else-if="movies.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardsMovie v-for="item in movies" :key="item.id" :movie="item" :color="'text-gray-200'"/>
      </div>
<!-- پیام خالی بودن فیلم‌ها -->
<div v-else-if="!loading && !error && movies.length === 0 && allPagesLoaded" class="text-center text-gray-500 mt-20">
  اطلاعاتی یافت نشد
</div>



      <!-- نمایش پیام بارگذاری -->
      <div v-if="loading" class="text-center text-white mt-4">loading...</div>
    </div>

    <!-- نوار پایین صفحه -->
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

// متغیرها
const route = useRoute();
const genreId = route.params.id as string;
const movies = ref<Array<any>>([]);
const genreName = ref<string>("");
const error = ref<string>(""); // مقدار اولیه به رشته خالی تغییر داده شد
const loading = ref<boolean>(true);
const inProgress = ref<boolean>(false);
const currentPage = ref<number>(1);
const allPagesLoaded = ref<boolean>(false);

// دریافت نام ژانر
const fetchGenreName = async () => {
  try {
    const response = await axios.get("https://moviesapi.ir/api/v1/genres");
    const genres = response.data as Array<{ id: number; name: string }>;
    const selectedGenre = genres.find((genre) => genre.id === parseInt(genreId));

    if (selectedGenre) {
      genreName.value = selectedGenre.name;
    } else {
      throw new Error("ژانر یافت نشد");
    }
  } catch (err) {
    error.value = "خطا در دریافت اطلاعات ژانر";
    console.error(err);
  }
};


// تابع دریافت فیلم‌های صفحه
const fetchMovies = async () => {
  if (inProgress.value || allPagesLoaded.value) {return};

  loading.value = true;
  try {
    inProgress.value = true;
    const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${genreId}/movies?page=${currentPage.value}`);
    const { data } = response.data;

    if (data && data.length > 0) {
      movies.value.push(...data);
      currentPage.value++;
    } else {
      allPagesLoaded.value = true; // اگر داده‌ای برنگردد یعنی به انتهای صفحات رسیده‌ایم
    }
  } catch (err) {
    error.value = "خطا در دریافت اطلاعات فیلم‌ها";
    console.error(err);
  } finally {
    inProgress.value = false;
    loading.value = false;
    console.log(loading)
  }
};

// تابع مدیریت اسکرول
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const clientHeight = window.innerHeight;

  // تشخیص رسیدن به پایین صفحه
  if (scrollTop + clientHeight >= scrollHeight - 50) {
    fetchMovies();
  }
};

// اجرا هنگام لود صفحه
onMounted(async () => {
  await fetchGenreName();
  await fetchMovies();

  // افزودن رویداد اسکرول به window
  window.addEventListener("scroll", handleScroll);
});

// پاک کردن رویداد در زمان خروج
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


