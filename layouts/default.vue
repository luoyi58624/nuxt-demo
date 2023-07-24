<template>
  <div class="w-screen">
    <header class="relative shadow-sm bg-white xs:h-40vh sm:h-50vh md:h-60vh lg:h-70vh xl:h-80vh">
      <nav
        class="absolute top-0 z-1 w-full h-56px"
        style="background: rgba(29, 29, 31, 0.4); backdrop-filter: saturate(180%) blur(20px)">
        <div
          class="h-full mx-auto px-4 flex items-center xs:(justify-center w-full) sm:(justify-between w-full) md:(justify-between container)">
          <NuxtLink to="/" class="font-bold text-xl text-white">Luoyi's Blog</NuxtLink>
          <ul class="flex h-full xs:display-none sm:display-flex">
            <NuxtLink
              v-for="navItem in navRoutes"
              :to="navItem.route"
              active-class="nav-active"
              class="flex-1 relative h-full px-8 flex-center select-none cursor-pointer font-bold text-light-50 hover:(bg-dark-5 bg-opacity-30)">
              {{ navItem.name }}
            </NuxtLink>
          </ul>
        </div>
      </nav>
      <CorouselImages
        :images="images"
        class="absolute top-0 z-0 xs:h-40vh sm:h-50vh md:h-60vh lg:h-70vh xl:h-80vh" />
      <Wave class="absolute bottom-0" />
    </header>
    <main class="flex-1 mx-auto p-4 xs:(justify-center w-full) sm:(justify-between container)">
      <NuxtPage :keepalive="true" />
    </main>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const navRoutes = [
  { name: '文章', route: '/' },
  { name: '标签', route: '/tag' },
  { name: '分类', route: '/classify' },
  { name: '项目', route: '/project' },
  { name: '我的', route: '/my' }
]

const images = [
  'images/home/header1.webp',
  'images/home/header2.webp',
  'images/home/header3.webp',
  'images/home/header4.webp',
  'images/home/header5.webp',
  'images/home/header6.webp'
].map(item => {
  if (runtimeConfig.app.baseURL === '/') return '/' + item
  else return runtimeConfig.app.baseURL + item
})
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
