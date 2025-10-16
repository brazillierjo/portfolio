<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  onClick: {
    type: Function,
  },
  classes: {
    type: String,
  },
})
</script>

<template>
  <button
    :type="type"
    :class="[
      'border-primary bg-primary text-secondary hover:text-primary flex items-center justify-center rounded-full border-2 px-4 py-2 font-semibold transition-all duration-150 hover:bg-transparent lg:px-6 lg:py-3',
      classes,
    ]"
    @click="onClick"
  >
    <slot />
  </button>
</template>
