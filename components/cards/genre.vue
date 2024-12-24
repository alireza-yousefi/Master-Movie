<script setup>
const props = defineProps({
    genre : {
        type : Object,
        required : true,
    }
})
</script>




<template>
        <Nuxt-Link :to="`/genre/${genre.id}`"
          class="bg-gray-100 shadow-md rounded-lg p-4 text-center hover:bg-blue-100 transition cursor-pointer"
        >
          <p class="text-lg font-semibold text-gray-800">{{ genre.name }}</p>
        </Nuxt-Link>
</template>

