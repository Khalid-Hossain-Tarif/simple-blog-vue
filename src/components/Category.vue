<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const categoryBlogs = ref();

onMounted(() => {
    fetch('https://basic-blog.teamrabbil.com/api/post-list/2')
      .then(response => response.json())
      .then(data => categoryBlogs.value = data)
      .catch(error => {
        console.log(error)
      });
});
</script>

<template>
    <div class="container py-10">
        {{ categoryBlogs }}
        <div class="grid md:grid-cols-2 gap-10">
            <div class="rounded-[10px] shadow-lg cursor-pointer" @click="router.push(`${categoryBlog.id}`)" v-for="categoryBlog in categoryBlogs" :key="categoryBlog.id">
                {{ categoryBlog.category_id }}
                <img :src="categoryBlog.img" alt="Image" class="rounded-t-[10px] bg-gray-200 w-full h-[262px]">
                <div class="p-5">
                    <h4 class="text-base font-semibold">{{ categoryBlog.title }}</h4>
                    <p class="text-sm my-2">{{ categoryBlog.short }}</p>
                </div>
            </div>
        </div>
    </div>
</template>