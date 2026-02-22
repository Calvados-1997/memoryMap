<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // CDNから読み込んだグローバルの L を使用してマップを初期化
  const map = L.map('map').setView([35.681236, 139.767125], 16) // 初期位置（例: 東京駅）

  // コピーライトを表示
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)
})
</script>

<template>
  <div id="map" class="map-container"></div>
</template>

<style scoped>
.map-container {
  height: 800px; /* Leafletは高さを指定しないと表示されません */
  width: 1200px;
}
</style>
