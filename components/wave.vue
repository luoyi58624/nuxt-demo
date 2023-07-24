<template>
  <svg
    class="waves"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shape-rendering="auto">
    <defs>
      <path
        id="gentle-wave"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </defs>
    <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0"></use>
      <use xlink:href="#gentle-wave" x="48" y="3"></use>
      <use xlink:href="#gentle-wave" x="48" y="5"></use>
      <use xlink:href="#gentle-wave" x="48" y="7"></use>
    </g>
  </svg>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@media (min-width: 1200px) {
  #tool.affix .player-info {
    right: 3.5rem;
  }

  #tool.affix {
    right: 1rem;
    bottom: 1rem;
  }
}

.waves {
  width: 100%;
  height: 15vh;
  min-height: 3.125rem;
  max-height: 9.375rem;
  content-visibility: auto;
  contain-intrinsic-size: 100vw 15vh;
}

@media (max-width: 820px) {
  .waves {
    height: 10vh;
    contain-intrinsic-size: 100vw 10vh;
  }
}

.parallax > use {
  animation: 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite wave;
}

use.stop-animation {
  animation-play-state: paused;
}

.parallax > use:first-child {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: rgba(255, 255, 255, 0.25);
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: rgba(255, 255, 255, 0.5);
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: rgba(255, 255, 255, 0.75);
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: rgba(255, 255, 255, 1);
}

@keyframes wave {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
