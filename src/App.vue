<script setup>
import { ref, onMounted } from "vue";

const categories = ref();

onMounted(() => {
  fetch('https://basic-blog.teamrabbil.com/api/post-categories')
    .then(response => response.json())
    .then(data => categories.value = data)
    .catch(error => {
      console.log(error)
    });
});


</script>

<template>
  <div class="bg-gray-200 py-4 sticky top-0 z-50">
    <nav class="container flex justify-between gap-2">
      <div>
        <RouterLink to="/" class="text-blue-600 font-bold text-xl">Blog.</RouterLink>
      </div>

      <ul class="flex gap-4">
        <li>
          <router-link active-class="active" class="text-sm font-medium text-black/90 hover:text-blue-600" to="/">হোম</router-link> 
        </li>
        <li v-for="category in categories" :key="category.id"> 
          <router-link active-class="active" class="text-sm font-medium text-black/90 hover:text-blue-600" :to="(`/category/${category.id}`)">{{ category.name }}</router-link> 
        </li>
      </ul>
    </nav>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
.active {
  @apply text-blue-700
}
</style>