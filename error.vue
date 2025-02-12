<template>
  <NuxtLayout>
    <div class="prose" v-if="error.statusCode === 404">
      <h1>404</h1>
      <p>Page not found</p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
    <div class="prose" v-else>
      <h1>Coucou le minou</h1>
      <p>{{ error.statusCode }}</p>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError();
</script>