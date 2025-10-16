<script setup lang="ts">
import type { ITimelineItem } from '~/utils/types/timeline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  items: {
    type: Array as () => ITimelineItem[],
    required: true,
  },
})
</script>

<template>
  <div class="relative flex flex-col space-y-8">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-start"
      v-motion-slide-visible-once-bottom
    >
      <!-- Timeline Dot -->
      <div class="flex-shrink-0">
        <div class="bg-primary relative z-10 h-4 w-4 rounded-full" />

        <div
          v-if="index < items.length - 1"
          class="bg-tertiary absolute top-0 left-2 h-full w-0.5"
        />
      </div>

      <!-- Content -->
      <div class="ml-8 text-left">
        <!-- Years -->
        <p class="text-icons text-sm">{{ item.years }}</p>

        <!-- Title and Company -->
        <h3 class="text-lg font-semibold">
          {{ item.title }}
          <span class="text-primary">at {{ item.company }}</span>
        </h3>

        <!-- Description -->
        <p v-if="item.description" class="text-text mt-2 text-sm">
          {{ item.description }}
        </p>

        <!-- Technologies -->
        <div v-if="item.technologies && item.technologies.length" class="mt-5">
          <p class="text-icons text-sm font-semibold">
            {{ t('timeline.tags') }}:
          </p>

          <ul class="mt-1 flex flex-wrap gap-2">
            <li
              v-for="(tech, techIndex) in item.technologies"
              :key="techIndex"
              class="text-secondary rounded-lg bg-gray-200 px-2 py-1 text-xs"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
