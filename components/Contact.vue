<script setup lang="ts">
import { Contact } from '~/utils/enums/Contact'
import Tag from '~/components/ui/Tag.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const introduceLink = links.find(link => link.id === 'contact')
</script>

<template>
  <section
    id="contact"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
    v-motion-fade
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-2xl font-bold">
      {{ t('contact.title1') }}
      <span class="text-primary">{{ t('contact.title2') }}</span> !
    </h1>

    <div class="flex items-center justify-center gap-4 xl:justify-start">
      <a
        :href="`mailto:${Contact.Email}`"
        class="border-icons flex h-14 w-14 items-center justify-center rounded-full border-2 text-icons transition-colors duration-200 hover:bg-primary hover:text-secondary"
        :title="Contact.Email"
        :aria-label="Contact.Email"
      >
        <Icon name="mdi:email-outline" class="h-6 w-6" />
        <span class="sr-only">{{ Contact.Email }}</span>
      </a>

      <a
        :href="Contact.PhoneLink"
        class="border-icons flex h-14 w-14 items-center justify-center rounded-full border-2 text-icons transition-colors duration-200 hover:bg-primary hover:text-secondary"
        :title="Contact.Phone"
        :aria-label="Contact.Phone"
      >
        <Icon name="mdi:phone-outline" class="h-6 w-6" />
        <span class="sr-only">{{ Contact.Phone }}</span>
      </a>
    </div>

    <p class="text-icons text-lg">{{ t('contact.phrase') }}</p>

    <a
      :href="`mailto:${Contact.Email}`"
      class="hover:bg-primary-light bg-primary text-secondary flex items-center gap-2 rounded-md px-6 py-3 font-semibold shadow-md transition duration-300"
    >
      {{ t('contact.contact_me') }}
      <Icon name="mdi:email-outline" class="h-5 w-5" />
    </a>
  </section>
</template>
