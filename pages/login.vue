<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ title }}</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Log in with GitHub
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
</script>