<script setup>
import { ref, onMounted } from "vue";

const singleBlogs = ref();

onMounted(() => {
    fetch('https://basic-blog.teamrabbil.com/api/post-details/53')
      .then(response => response.json())
      .then(data => singleBlogs.value = data)
      .catch(error => {
        console.log(error)
      });
});
</script>

<template>
    <div class="container py-10">
        {{ singleBlogs }}
            <div class="rounded-[10px] shadow-lg" v-for="singleBlog in singleBlogs" :key="singleBlogs.id">
                {{ singleBlogs.title }}
                <img :src="singleBlogs.postDetails.img" alt="Image" class="rounded-t-[10px] bg-gray-200">
                <div class="p-5">
                    <p class="text-sm"><strong>Post Date: </strong>{{ singleBlog.created_at }}</p>
                    <h4 class="text-2xl font-semibold my-4">{{ singleBlogs.postDetails.title }}</h4>
                    <p class="text-sm">{{ singleBlogs.postDetails.content }}</p>
                </div>
            </div>
    </div>
</template>