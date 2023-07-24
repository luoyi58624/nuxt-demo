<template>
  <div id="imgs">
    <ul>
      <li
        v-for="image in images"
        class="item lozaded"
        :data-background-image="image"
        data-loaded="true"
        :style="{
          backgroundImage: `url(${image})`
        }"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  images: string[]
}
defineProps<Props>()
</script>

<style scoped lang="scss">
#imgs {
  display: block;
  width: 100%;
  background-color: #363636;
  content-visibility: auto;
  contain-intrinsic-size: 100vw 70vh;
}

#imgs li.stop-animation {
  animation-play-state: paused;
}

#imgs img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
}

#imgs .item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  animation: 36s linear infinite imageAnimation;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

#imgs .item:nth-child(2) {
  animation-delay: 6s;
}

#imgs .item:nth-child(3) {
  animation-delay: 12s;
}

#imgs .item:nth-child(4) {
  animation-delay: 18s;
}

#imgs .item:nth-child(5) {
  animation-delay: 24s;
}

#imgs .item:nth-child(6) {
  animation-delay: 30s;
}

#imgs .item:nth-child(7) {
  animation-delay: 36s;
}

#imgs::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: 0.2s ease-in-out;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }

  17% {
    opacity: 1;
    transform: scale(1.1);
  }

  25% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
  }
}
</style>
