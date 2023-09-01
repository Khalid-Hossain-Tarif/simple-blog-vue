<script setup>
</script>

<template>
  <div class="">
    <nav>
      <ul class="flex gap-5 justify-center bg-gray-200 p-4">
        <li> <router-link active-class="active" class="font-medium text-black/90 hover:text-blue-600" to="/">Home</router-link> </li>
        <li> <router-link active-class="active" class="font-medium text-black/90 hover:text-blue-600" to="/blog">Blog</router-link> </li>
      </ul>
    </nav>
  </div>

  <RouterView></RouterView>
</template>