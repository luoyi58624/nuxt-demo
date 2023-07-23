<template>
  <div>
    <main class="flex-1 container mx-auto p-4">
      <NuxtPage :keepalive="true" />
    </main>
    <var-bottom-navigation v-model:active="active" fixed safe-area>
      <var-bottom-navigation-item label="首页" icon="home" />
      <var-bottom-navigation-item label="分类" icon="magnify" />
      <var-bottom-navigation-item label="购物车" icon="cart-outline" />
      <var-bottom-navigation-item label="消息" icon="heart" />
      <var-bottom-navigation-item label="我的" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>

<script setup lang="ts">
const active = ref(0)
</script>

<style scoped lang="scss"></style>
