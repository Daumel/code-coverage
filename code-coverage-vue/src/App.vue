<script setup lang="ts">
import NumberChecker from './components/NumberChecker.vue'

const array = [1, 2, 3, 4, 5];
const number = 5;
</script>

<template>
  <main>
    <NumberChecker  :array=array :number=number />
  </main>
</template>
