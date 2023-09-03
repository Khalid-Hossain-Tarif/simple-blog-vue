<script setup>
import { ref, onMounted, inject } from "vue";

const isLoading = inject('isLoading');
const newestPosts = ref([]);

onMounted(() => {
    isLoading.value = true;
    fetch(`https://basic-blog.teamrabbil.com/api/post-newest`)
      .then(response => response.json())
      .then(data => {
        newestPosts.value = data;
        isLoading.value = false
      })
      .catch(error => {
        console.log(error)
      });
});

</script>

<template>
    <div class="container py-10">
      <h2 class="text-3xl font-bold mb-7">New Posts</h2>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="rounded-[10px] shadow-lg" v-for="newestPost in newestPosts" :key="newestPost.id">
          <img :src="newestPost.img" alt="Image" class="rounded-t-[10px] bg-gray-200 w-full h-[262px]">
          <div class="p-5">
            <h4 class="text-base font-semibold">{{ newestPost.title }}</h4>
            <p class="text-sm mt-2 mb-4">{{ newestPost.short }}</p>
            <RouterLink :to="`/blog/${newestPost.id}`" class="bg-blue-600 text-white px-5 py-1.5 rounded text-sm">Details</RouterLink>
          </div>
        </div>
      </div>
    </div>
</template>