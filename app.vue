<template>
  <div class="w-screent h-screen flex flex-col">
    <!-- <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-xl">Nuxt Demo</NuxtLink>
        <ul class="flex gap-8">
          <li class="flex-1"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="flex-1"><NuxtLink to="/about" class="text-green-600">About</NuxtLink></li>
          <li class="flex-1"><NuxtLink to="/my" class="btn">My</NuxtLink></li>
        </ul>
      </nav>
    </header> -->
    <main class="flex-1 container mx-auto p-4">
      <NuxtPage :keepalive="true" />
    </main>
    <var-bottom-navigation v-model:active="active">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>

<script setup lang="ts">
import '@varlet/touch-emulator'
const active = ref(0)
</script>

<style lang="scss">
@import '@/assets/css/index.scss';
</style>
