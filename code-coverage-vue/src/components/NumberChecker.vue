<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  array: number[],
  number: number
}>()

const count = ref(0);
const result = ref('No result yet');

function handeClick() {
  count.value++;
  if (props.array.includes(props.number)) {
    result.value = 'Array contains number';
  } else {
    result.value = 'Array doesn\'t contain number';
  }
}
</script>

<template>
  <div>
    <button data-testid="clickme-button" @click="handeClick">Click me</button>
    <span id="counter">{{ count }}</span>
    <br/>
    <span id="result">{{ result }}</span>
  </div>
</template>
