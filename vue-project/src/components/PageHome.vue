<template>
  <div class="container" style="margin:auto">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>
  
<script setup>
    import sourceData from '@/data.json'
    import { ref } from 'vue'
    import ThreadList from '@/components/ThreadList.vue'

    const threads = ref(sourceData.threads)
    const posts = ref(sourceData.posts)
    const users = ref(sourceData.users)

    function postById (postId) {
      return posts.value.find(p => p.id === postId)
    }

    function userById (userId) {
        return users.value.find(p => p.id === userId)
    }
</script>