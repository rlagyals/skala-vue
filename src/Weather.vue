<script setup>
import { ref, computed, watch } from 'vue'

const weatherList = ref([
  { id: 'city01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city02', name: '수원', temp: 24, status: '비' },
  { id: 'city03', name: '부산', temp: 26, status: '구름' },
])

const searchKeyword = ref('')

const searchedCity = computed(() => {
  if (!searchKeyword.value.trim()) return null
  return weatherList.value.find((city) => city.name.includes(searchKeyword.value))
})

const selectedCity = ref(null)

const formatCityInfo = (city) => `${city.name} (${city.temp}도, ${city.status})`

const selectCity = (city) => {
  selectedCity.value = city
  searchKeyword.value = ''
}

watch(searchKeyword, (newVal) => {
  if (newVal) {
    selectedCity.value = null
  }
})

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section">
    <h2>🌤️ 과제 1: 날씨 (Mockup)</h2>

    <section style="border: 1px solid #ccc; padding: 16px; margin-bottom: 8px; cursor: pointer">
      <div>
        <h3>🔍 도시 검색</h3>
        <input
          type="text"
          :value="searchKeyword"
          @input="searchKeyword = $event.target.value"
          placeholder="검색할 도시 이름 입력"
        />
        <p>검색 중인 도시: {{ searchKeyword }}</p>
      </div>
    </section>
    <section style="border: 1px solid #ccc; padding: 16px; margin-bottom: 8px; cursor: pointer">
      <div>
        <h3>🏙️ 지역별 날씨 현황</h3>
      </div>
      <div>
        <p v-if="searchKeyword && searchedCity">🔍 검색 결과: {{ formatCityInfo(searchedCity) }}</p>
        <p v-else-if="searchKeyword && !searchedCity">
          "{{ searchKeyword }}"과/와 일치하는 도시가 없습니다.
        </p>

        <p v-if="selectedCity">✅ 선택된 도시: {{ formatCityInfo(selectedCity) }}</p>
      </div>
      <div
        v-for="city in weatherList"
        :key="city.id"
        class="weather-card"
        style="border: 1px solid #ccc; padding: 16px; margin-bottom: 8px; cursor: pointer"
        @click="selectCity(city)"
      >
        <p>{{ city.name }} ({{ city.status }})</p>
        <p>현재 기온: {{ city.temp }}℃</p>

        <p v-if="city.temp >= 25">🔥 더움 (25도 이상)</p>
        <p v-else>❄️ 선선함 (25도 미만)</p>

        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>
    </section>
    <div>
      <p>카드를 클릭하거나 검색해 보세요.</p>
    </div>
  </div>
</template>
