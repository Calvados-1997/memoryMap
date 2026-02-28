# MemoryMap(WIP)

A map-based web application built with Vue 3 that allows users to search for places in Japan and navigate to them on an interactive map.

Vue 3 で構築した地図ベースのWebアプリケーションです。場所を検索し、地図上で表示・移動できます。

## Tech Stack / 技術スタック

- **Vue 3** + **Vite** — フレームワーク & ビルドツール
- **Vuetify 4** — UIコンポーネント
- **Tailwind CSS 4** — ユーティリティCSS
- **Pinia** — 状態管理
- **Leaflet** (CDN) — 地図表示（OpenStreetMap）
- **Nominatim API** — ジオコーディング（場所検索）

## Features / 機能

- Interactive map display / インタラクティブな地図表示
- Place search with geocoding (Japan) / 場所検索（日本国内）
- Map navigation to search results / 検索結果への地図移動

## Project Structure / プロジェクト構成

```
src/
├── components/ui/   # 再利用可能なUIコンポーネント
├── composables/     # Composables（useMap等）
├── pages/           # ページコンポーネント
├── router/          # Vue Router設定
└── stores/          # Pinia ストア（状態管理・API通信）
```

## APIs / 使用API

- **[OpenStreetMap](https://www.openstreetmap.org/)** — Map tiles / 地図タイル
- **[Nominatim](https://nominatim.org/)** — Geocoding / ジオコーディング（[Usage Policy](https://operations.osmfoundation.org/policies/nominatim/)）
