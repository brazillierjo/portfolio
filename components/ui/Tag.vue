<script setup lang="ts">
const props = defineProps({
  classes: {
    type: String,
  },
})
</script>

<template>
  <div
    :class="[
      'border-tertiary flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-normal uppercase',
      classes,
    ]"
  >
    <slot />
  </div>
</template>
