<script setup lang="ts">
import { links } from '~/utils/links'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const isActive = (linkName: string) => route.hash === `#${linkName}`
</script>

<template>
  <div
    class="hidden xl:fixed xl:top-1/2 xl:right-8 xl:block xl:-translate-y-1/2"
  >
    <nav
      class="border-tertiary flex w-fit min-w-[50px] flex-col items-center gap-5 rounded-full border bg-transparent py-6"
    >
      <div v-for="link in links" :key="link.name" class="group relative">
        <a :href="`#${link.id}`" class="relative p-2">
          <!-- Icon -->
          <Icon
            :name="link.icon"
            :class="[
              'text-icons hover:text-primary mx-auto h-5 w-5 transition-all duration-150',
              isActive(link.id) ? 'text-primary' : '',
            ]"
            size="24"
          />

          <!-- Tooltip -->
          <span
            class="bg-opacity-80 absolute top-1/2 right-full ml-3 hidden min-w-max -translate-y-1/2 rounded-lg bg-black px-4 py-2 text-sm whitespace-nowrap text-white shadow-lg transition-opacity duration-300 ease-out group-hover:block"
          >
            {{ t(link.name) }}
          </span>
        </a>
      </div>
    </nav>
  </div>
</template>
