<script setup>
import {inject, ref} from "vue";
import { useRoute } from 'vue-router';

const isLoading = inject('isLoading');
const singleBlog = ref({});
const route = useRoute();

isLoading.value = false
fetch(`https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`)
    .then(response => response.json())
    .then(data => {
      singleBlog.value = data;
      isLoading.value = false
    })
    .catch(error => {
        console.log(error)
    });
</script>

<template>
    <div class="container py-10">
        <div class="rounded-[10px] shadow-lg" v-if="singleBlog.postDetails">
            <img :src="singleBlog.postDetails.img" alt="Image" class="rounded-t-[10px] bg-gray-200">
            <div class="p-5">
                <p class="text-sm"><strong>Post Date: </strong>{{ singleBlog.postDetails.created_at }}</p>
                <h4 class="text-2xl font-semibold my-4">{{ singleBlog.postDetails.title }}</h4>
                <p class="text-sm">{{ singleBlog.postDetails.content }}</p>
            </div>
        </div>

        <div class="grid place-content-center h-screen" v-else>
            <p class="text-3xl text-red-600 text-center">No Data Found!</p>
        </div>
    </div>
</template>