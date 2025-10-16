<script setup lang="ts">
import Tag from '~/components/ui/Tag.vue'
import { links } from '~/utils/links'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const introduceLink = links.find(link => link.id === 'about')

const paragraphKeys = [
  'aboutMe.phrase1',
  'aboutMe.phrase2',
  'aboutMe.phrase3',
  'aboutMe.phrase4',
  'aboutMe.phrase5',
  'aboutMe.phrase6',
]
</script>

<template>
  <section
    id="about"
    class="flex flex-col items-center gap-6 xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12"
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>
      {{ t('aboutMe.title1') }}
      <span class="text-primary">{{ t('aboutMe.title2') }}</span
      >.
    </h1>

    <div class="text-md flex flex-col gap-6">
      <p
        v-for="(key, index) in paragraphKeys"
        :key="index"
        class="xl:text-text text-justify"
        v-motion-slide-visible-right
      >
        {{ t(key) }}
      </p>
    </div>

    <a
      href="#experiences"
      class="border-text text-text hover:bg-text hover:text-secondary w-fit items-center gap-2 rounded-full border-2 px-4 py-2 text-sm uppercase transition-all duration-300 lg:flex"
    >
      {{ t('aboutMe.go_to_my_experiences') }}
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>
