<script setup>
defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select', 'detail'])
</script>

<template>
  <div class="weather-card" @click="emit('select', city)">
    <p>{{ city.name }} ({{ city.status }})</p>
    <p>현재 기온: {{ city.temp }}℃</p>

    <span class="badge" :class="city.temp >= 25 ? 'hot' : 'cool'">
      {{ city.temp >= 25 ? '🔥 더움 (25도 이상)' : '🧊 선선함 (25도 미만)' }}
    </span>

    <button class="btn-detail" @click.stop="emit('detail', city)">상세보기</button>
  </div>
</template>

<style scoped>
.weather-card {
  background: #fff;
  border: 1px solid #dee2e6;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
}
.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
.hot {
  background-color: #ff7675;
}
.cool {
  background-color: #74b9ff;
}
.btn-detail {
  position: absolute;
  right: 12px;
  top: 15px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
