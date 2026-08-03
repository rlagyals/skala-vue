<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

import SearchBar from './SearchBar.vue'
import BaseDashboardCard from './BaseDashboardCard.vue'

const weatherList = ref([
  { id: 'city01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city02', name: '수원', temp: 24, status: '비' },
  { id: 'city03', name: '부산', temp: 26, status: '구름' },
])

const searchQuery = ref('')
const selectedCityInfo = ref(null)

const filteredWeatherList = computed(() => {
  if (!searchQuery.value.trim()) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})

watch(selectedCityInfo, (newInfo) => {
  console.log(`👁️‍🗨️ [watch 감지] 선택된 도시가 업데이트되었습니다 -> "${newInfo?.name ?? '없음'}"`)
})

watchEffect(() => {
  console.log(
    `🤖 [watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 API 데이터를 필터링합니다.`,
  )
})

const selectCity = (city) => {
  selectedCityInfo.value = city
}

const showDetail = (city) => {
  window.alert(`${city.name}의 현재 날씨는 [${city.status}] 상태입니다.`)
}
</script>

<template class="app-container">
  <div class="dashboard-wrapper">
    <h1>🌤️ 과제 2: 날씨 컴포지션</h1>
    <hr />

    <SearchBar v-model="searchQuery" />

    <BaseDashboardCard
      :filtered-weather-list="filteredWeatherList"
      :search-query="searchQuery"
      :selected-city-info="selectedCityInfo"
      @select-city="selectCity"
      @show-detail="showDetail"
    />
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>
