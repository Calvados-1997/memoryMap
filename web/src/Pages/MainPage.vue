<script setup>
import Input from '@/components/ui/Input.vue'
import { useMap } from '@/composables/useMap'
import { useMapStore } from '@/stores/mapStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { searchPlaceError, fetchedLatLng } = storeToRefs(useMapStore())
const { fetchPlaceData, hasSearchPlaceError } = useMapStore()
// マップ読み込み
const { mapId, setView } = useMap()
const searchTarget = ref()
const isLoading = ref(false)
const searchPlace = async () => {
  isLoading.value = true
  await fetchPlaceData(searchTarget.value)
  setView(fetchedLatLng.value, 20)
  isLoading.value = false
}
</script>

<template>
  <div class="relative w-full h-full">
    <!-- マップ -->
    <div :id="mapId" class="w-full h-full" />

    <!-- マップの上に表示するUI -->
    <div class="absolute top-4 left-15 z-[1000] p-2">
      <div class="w-90 bg-white">
        <Input
          clearable="clearable"
          hideDetails="auto"
          placeholder="場所を検索 例)東京駅"
          prepend-inner-icon="mdi-map-marker"
          density="compact"
          :loading="isLoading"
          :disabled="isLoading"
          v-model:input="searchTarget"
          @enter-key-down="searchPlace"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
