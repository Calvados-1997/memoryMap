import { onMounted, shallowRef } from 'vue'

const defaultZoomLevel = 16
const defaultLatLng = [35.681236, 139.767125]

export function useMap() {
  const map = shallowRef(null)
  const mapId = 'map'

  onMounted(() => {
    // CDNから読み込んだグローバルの L を使用してマップを初期化
    // 初期値は東京駅
    map.value = L.map(mapId).setView(defaultLatLng, defaultZoomLevel)

    // コピーライトを表示
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value)
  })

  // マップビューをデフォルトに戻す
  const resetView = () => {
    map.value?.setView(defaultLatLng, defaultZoomLevel)
  }

  const setView = (latLng, zoomLevel) => {
    map.value?.setView(latLng, zoomLevel)
  }

  return { mapId, map, resetView, setView }
}
