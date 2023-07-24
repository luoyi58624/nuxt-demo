<template>
  <div>
    <header
      class="fixed top-0 z-1 w-full h-56px shadow-sm bg-dark-9 bg-opacity-70 backdrop-blur-md">
      <nav
        class="h-full mx-auto px-4 flex items-center xs:(justify-center w-full) sm:(justify-between w-full) md:(justify-between container)">
        <span class="font-bold text-xl text-white">Luoyi's Blog</span>
        <ul class="flex h-full xs:display-none sm:display-flex">
          <NuxtLink
            v-for="navItem in navRoutes"
            :to="navItem.route"
            active-class="nav-active"
            class="flex-1 relative h-full px-8 flex-center select-none cursor-pointer font-bold text-light-50 transition duration-300 hover:(bg-dark-5 bg-opacity-30)">
            {{ navItem.name }}
          </NuxtLink>
        </ul>
      </nav>
    </header>
    <NuxtPage :keepalive="true" />
  </div>
</template>

<script setup lang="ts">
const navRoutes = [
  { name: '文章', route: '/' },
  { name: '标签', route: '/tag' },
  { name: '分类', route: '/classify' },
  { name: '项目', route: '/project' },
  { name: '我的', route: '/my' }
]
</script>

<style scoped lang="scss">
.nav-active {
  &::after {
    content: '';
    animation: sliderEnter 0.3s ease-out forwards;
    @apply absolute bottom-0 z-10 h-2.5px rounded bg-white;
  }
}

@keyframes sliderEnter {
  0% {
    width: 0px;
  }

  100% {
    width: 80%;
  }
}
</style>
