<script setup>
import WeatherCard from './WeatherCard.vue'

defineProps({
  filteredWeatherList: {
    type: Array,
    required: true,
  },
  searchQuery: {
    type: String,
    default: '',
  },
  selectedCityInfo: {
    type: Object,
    default: null,
  },
})

defineEmits(['select-city', 'show-detail'])
</script>

<template>
  <div class="list-box">
    <p v-if="searchQuery && filteredWeatherList.length === 0">
      "{{ searchQuery }}"과/와 일치하는 도시가 없습니다.
    </p>

    <WeatherCard
      v-for="city in filteredWeatherList"
      :key="city.id"
      :city="city"
      @select="$emit('select-city', city)"
      @detail="$emit('show-detail', $event)"
    />
  </div>

  <div>
    <p
      class="status-bar"
      v-if="(searchQuery || selectedCityInfo) && filteredWeatherList.length !== 0"
    >
      {{ searchQuery || selectedCityInfo.name }}이 선택되었습니다.
    </p>
    <p class="status-bar" v-else-if="!(searchQuery || selectedCityInfo)">
      카드를 클릭하거나 검색해 보세요.
    </p>
  </div>
</template>

<style scoped>
.list-box {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
}
.status-bar {
  background: #e8f5e9;
  padding: 10px;
  text-align: center;
  color: #2e7d32;
  font-weight: bold;
  border-radius: 6px;
}
</style>
