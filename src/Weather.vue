<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import SearchBar from './components/SearchBar.vue'
import BaseDashboardCard from './components/BaseDashboardCard.vue'

// 1. 반응형 상태 관리를 위한 지역별 날씨 배열
const weatherList = ref([
  { id: 'city01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city02', name: '수원', temp: 24, status: '비' },
  { id: 'city03', name: '부산', temp: 26, status: '구름' },
])

const searchQuery = ref('')
const selectedCityInfo = ref(null)

// 2. 검색 도시 (computed) - 검색어가 이름에 포함된 항목만 필터링
const filteredWeatherList = computed(() => {
  if (!searchQuery.value.trim()) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})

const formatCityInfo = (city) => `${city.name} (${city.temp}도, ${city.status})`

const selectCity = (city) => {
  selectedCityInfo.value = city
}

// 3. 반응형 변수 변화 감시
// selectedCityInfo 감시 (watch) - 상태바 문구가 바뀔 때마다 콘솔로그
watch(selectedCityInfo, (newVal) => {
  if (newVal) {
    console.log(`상태바 변경: ${formatCityInfo(newVal)}`)
  }
})

// searchQuery 감시 (watchEffect) - 타이핑할 때마다 콘솔로그
watchEffect(() => {
  console.log('검색어 변경:', searchQuery.value)
})

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="app-container">
    <div class="dashboard-wrapper">
      <h1>🌤️ 과제 2: 날씨 컴포지션</h1>
      <hr />

      <SearchBar v-model="searchQuery" />

      <BaseDashboardCard
        :filtered-weather-list="filteredWeatherList"
        :search-query="searchQuery"
        :selected-city-info="selectedCityInfo"
        @select-city="selectCity"
        @show-detail="(city) => showDetail(city.name, city.status)"
      />
    </div>
  </div>
</template>
