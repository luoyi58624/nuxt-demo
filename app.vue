<template>
  <NuxtLayout :name="layoutName"></NuxtLayout>
</template>

<script setup lang="ts">
import '@varlet/touch-emulator'

const isPc = useMediaQuery('(min-width: 640px)')

const layoutName = computed(() => {
  // console.log(isPc.value)

  return isPc.value ? 'default' : 'mobile'
})

console.log(process.server);

if (process.server) {
  const header = useRequestHeaders()
  console.log(header)
}
</script>
