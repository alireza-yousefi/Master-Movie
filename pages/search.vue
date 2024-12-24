<template>
  <div class="min-h-screen">
    <!-- هدر جستجو -->
    <div class="fixed w-full bg-gray-800 h-14 top-0 flex items-center text-white text-2xl">
      <span class="ml-4">Search Movies</span>
    </div>

    <!-- محتوای اصلی -->
    <div class="p-4 pt-20 pb-20">
      <!-- ورودی جستجو -->
      <div class="relative">
        <input
          v-model="searchQuery"
          @keyup="debouncedSearch"
          type="text"
          class="w-full p-3 border border-gray-400 rounded-md mb-4 pr-10"
          placeholder="Search for movies..."
        />
        <span
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute top-6 right-4 transform -translate-y-1/2 text-white "
        >
          ✕
        </span>
      </div>

      <!-- نمایش نتایج جستجو -->
      <div v-if="loading" class="text-center text-gray-500 mt-10">Loading...</div>

      <div
        v-else-if="movies.length > 0"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <CardsMovie v-for="item in movies" :key="item.id" :movie="item" />
      </div>

      <div
        v-else-if="searchQuery && !loading && movies.length === 0"
        class="text-center text-gray-500 mt-10"
      >
        No results found for "{{ searchQuery }}"
      </div>

      <!-- نمایش پیام خطا -->
      <div v-if="error" class="text-center text-red-500 mt-4">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

// متغیرها
const searchQuery = ref(""); // عبارت جستجو
const movies = ref<Array<any>>([]); // نتایج جستجو
const loading = ref(false); // وضعیت بارگذاری
const error = ref<string | null>(null); // پیام خطا

// تایمر برای تاخیر (debounce)
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

// تابع جستجو
const searchMovies = async () => {
  // اگر کاربر ورودی را پاک کرد، لیست نتایج خالی شود
  if (!searchQuery.value.trim()) {
    movies.value = [];
    error.value = null;
    return;
  }

  loading.value = true; // شروع بارگذاری
  error.value = null; // ریست خطاها
  try {
    const response = await axios.get(
      `https://moviesapi.ir/api/v1/movies?q=${searchQuery.value}`
    );
    movies.value = response.data.data; // ذخیره نتایج
  } catch (err) {
    error.value = "خطا در جستجوی فیلم‌ها"; // پیام خطا
    console.error(err);
  } finally {
    loading.value = false; // پایان بارگذاری
  }
};

// تابع جستجوی با تأخیر
const debouncedSearch = () => {
  if (debounceTimer) clearTimeout(debounceTimer); // لغو تایمر قبلی
  debounceTimer = setTimeout(() => {
    searchMovies(); // اجرای جستجو با تأخیر
  }, 500); // 500 میلی‌ثانیه
};

// تابع پاک کردن متن ورودی
const clearSearch = () => {
  searchQuery.value = ""; // پاک کردن ورودی
  movies.value = []; // پاک کردن نتایج جستجو
  error.value = null; // ریست خطاها
};
</script>

<style scoped>
/* استایل دلخواه */
</style>
