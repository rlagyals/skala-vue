<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

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
      <h1>🌤️ 과제 1: 날씨 (Mockup)</h1>
      <hr />

      <div class="search-box">
        <h3>🔍 도시 검색</h3>
        <input
          type="text"
          :value="searchQuery"
          @input="searchQuery = $event.target.value"
          placeholder="검색할 도시 이름 입력"
        />
        <p>검색 중인 도시: {{ searchQuery }}</p>
      </div>

      <div class="list-box">
        <h3>🏙️ 지역별 날씨 현황</h3>

        <!-- 4. 검색 결과 표시 -->
        <p v-if="searchQuery && filteredWeatherList.length === 0">
          "{{ searchQuery }}"과/와 일치하는 도시가 없습니다.
        </p>

        <div
          v-for="city in filteredWeatherList"
          :key="city.id"
          class="weather-card"
          @click="selectCity(city)"
        >
          <p>{{ city.name }} ({{ city.status }})</p>
          <p>현재 기온: {{ city.temp }}℃</p>

          <span class="badge" :class="city.temp >= 25 ? 'hot' : 'cool'">
            {{ city.temp >= 25 ? '🔥 더움 (25도 이상)' : '❄️ 선선함 (25도 미만)' }}
          </span>

          <button class="btn-detail" @click.stop="showDetail(city.name, city.status)">
            상세보기
          </button>
        </div>
      </div>

      <p v-if="(searchQuery || selectedCityInfo) && filteredWeatherList.length !== 0">
        {{ searchQuery || selectedCityInfo.name }}이 선택되었습니다.
      </p>
      <p v-else-if="!(searchQuery || selectedCityInfo)">카드를 클릭하거나 검색해 보세요.</p>
    </div>
  </div>
</template>
