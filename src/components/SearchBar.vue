<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-box">
    <h3>🔍 도시 검색</h3>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="검색할 도시 이름 입력"
    />
    <p>검색 중인 도시: {{ modelValue }}</p>
  </div>
</template>

<style scoped>
.search-box {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
}
input {
  padding: 8px;
  width: 90%;
  font-size: 14px;
}
</style>
