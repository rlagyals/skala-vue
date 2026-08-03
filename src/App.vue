<script setup>
import SampleOne from './SampleOne.vue'
import SampleTwo from './SampleTwo.vue'
import Vhtml from './Vhtml.vue'
import Vxss from './Vxss.vue'
import Vtext from './Vtext.vue'
import Vbind from './Vbind.vue'
import ClassBinding from './ClassBinding.vue'
import StyleBinding from './StyleBinding.vue'
import Vifelse from './Vifelse.vue'
import Vshow from './Vshow.vue'
import Vfor from './Vfor.vue'
import Vmemo from './Vmemo.vue'
import Von from './Von.vue'
import Vevent from './Vevent.vue'
import Vmodifier from './Vmodifier.vue'
import FormData from './FormData.vue'
import Vshorthand from './Vshorthand.vue'
import Twoway from './Twoway.vue'
import Weather from './Weather.vue'
import Vref from './Vref.vue'
import Vcomputed from './Vcomputed.vue'
import Vwatch from './Vwatch.vue'
import Deepwatch from './Deepwatch.vue'
import WeatherParent from './components/WeatherParent.vue'
import PropsEmitsParent from './components/PropsEmitsParent.vue'
import SlotDefaultParent from './components/SlotDefaultParent.vue'
import SlotScopedParent from './components/SlotScopedParent.vue'
</script>

<template>
  <div class="section"><SampleOne /></div>
  <div class="section"><SampleTwo /></div>
  <div class="section"><Vhtml /></div>
  <div class="section"><Vxss /></div>
  <div class="section"><Vtext /></div>
  <div class="section"><Vbind /></div>
  <div class="section"><ClassBinding /></div>
  <div class="section"><StyleBinding /></div>
  <div class="section"><Vshorthand /></div>
  <div class="section"><Vifelse /></div>
  <div class="section"><Vshow /></div>
  <div class="section"><Vfor /></div>
  <div class="section"><Vmemo /></div>
  <div class="section"><Von /></div>
  <div class="section"><Vevent /></div>
  <div class="section"><Vmodifier /></div>
  <div class="section"><FormData /></div>
  <div class="section"><Twoway /></div>
  <div class="section"><Weather /></div>
  <div class="section"><Vref /></div>
  <div class="section"><Vcomputed /></div>
  <div class="section"><Vwatch /></div>
  <div class="section"><Deepwatch /></div>
  <div class="section"><WeatherParent /></div>
  <div class="section"><PropsEmitsParent /></div>
  <div class="section"><SlotDefaultParent /></div>
  <div class="section"><SlotScopedParent /></div>
</template>

<style scoped>
@import '@/assets/practice.css';
@import '@/assets/exercise.css';
</style>
