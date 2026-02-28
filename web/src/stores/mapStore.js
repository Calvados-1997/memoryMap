import { defineStore } from 'pinia'

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'

export const useMapStore = defineStore('map', {
  state: () => ({
    searchPlaceResults: undefined,
    searchPlaceError: undefined,
  }),
  getters: {
    fetchedLatLng() {
      if (!this.searchPlaceResults) return []
      return [this.searchPlaceResults.lat, this.searchPlaceResults.lng]
    },
    hasSearchPlaceError() {
      return this.searchPlaceError !== undefined
    },
  },
  actions: {
    async fetchPlaceData(placeName) {
      this.searchPlaceError = undefined
      try {
        const params = new URLSearchParams({
          q: placeName,
          countrycodes: 'JP',
          format: 'json',
          limit: 1,
        })
        const res = await fetch(`${NOMINATIM_URL}?${params}`, {
          headers: {
            'Accept-Language': 'ja',
            'User-Agent': 'memoryMap/1.0',
          },
        })

        if (!res.ok) {
          console.error(`An error occured on fetch place data. status code: ${res.status}`)
          this.searchPlaceError = `APIエラー: ${res.status}`
          return ''
        }

        const data = await res.json()
        if (data.length === 0) {
          this.searchPlaceError = 'データが見つかりませんでした。'
          return ''
        }

        this.searchPlaceResults = {
          displayName: data[0].display_name,
          lat: data[0].lat,
          lng: data[0].lon,
        }
      } catch (e) {
        console.error(e)
        this.searchPlaceError = e
      }
    },
  },
})
