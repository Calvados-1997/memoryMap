<script setup>
import { useMap } from '@/composables/useMap'

// マップ読み込み
const { map } = useMap()
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div id="map" class="map-container w-full flex-1" />
  </div>
</template>

<style scoped></style>
