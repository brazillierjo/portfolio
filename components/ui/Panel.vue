<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const closePanel = () => {
  emit('close')
}
</script>

<template>
  <div>
    <!-- Background Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300"
      @click="closePanel"
    />

    <!-- Sliding Panel -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="bg-bg fixed top-10 right-10 z-40 h-full max-h-[calc(100vh-80px)] w-3/4 max-w-sm translate-x-0 rounded-2xl text-white transition-transform duration-200"
      >
        <div class="px-10 pt-28">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
