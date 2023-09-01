<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';

const route  = useRoute();
const id = ref('');
id.value = route.params.id;

const categoryBlogs = ref([]);

onMounted(() => {
    fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id.value}`)
      .then(response => response.json())
      .then(data => categoryBlogs.value = data)
      .catch(error => {
        console.log(error)
      });
});
</script>

<template>
    <div class="container py-10">
        <div class="grid md:grid-cols-2 gap-10">
            <!-- <div class="rounded-[10px] shadow-lg cursor-pointer" @click="router.push(`${categoryBlog.id}`)" v-for="categoryBlog in categoryBlogs" :key="categoryBlog.id">
                {{ categoryBlog.category_id }}
                <img :src="categoryBlog.img" alt="Image" class="rounded-t-[10px] bg-gray-200 w-full h-[262px]">
                <div class="p-5">
                    <h4 class="text-base font-semibold">{{ categoryBlog.title }}</h4>
                    <p class="text-sm my-2">{{ categoryBlog.short }}</p>
                </div>
            </div> -->
            
            <div class="rounded-[10px] shadow-lg" v-for="categoryBlog in categoryBlogs" :key="categoryBlog.id">
                <img :src="categoryBlog.img" alt="Image" class="rounded-t-[10px] bg-gray-200 w-full h-[262px]">
                <div class="p-5">
                    <h4 class="text-base font-semibold">{{ categoryBlog.title }}</h4>
                    <p class="text-sm mt-2 mb-4">{{ categoryBlog.short }}</p>
                    <RouterLink :to="`/blog/${categoryBlog.id}`" class="bg-blue-600 text-white px-5 py-1.5 rounded text-sm">Details</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>