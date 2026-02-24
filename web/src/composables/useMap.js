import { onMounted, shallowRef } from 'vue'

export function useMap() {
  const map = shallowRef(null)

  onMounted(() => {
    // CDNから読み込んだグローバルの L を使用してマップを初期化
    // 初期値は東京駅
    map.value = L.map('map').setView([35.681236, 139.767125], 16)

    // コピーライトを表示
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value)
  })

  // マップビューをデフォルトに戻す
  const resetView = () => {
    map.value?.setView([35.681236, 139.767125], 16)
  }

  return { map, resetView }
}
