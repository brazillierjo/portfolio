<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import { Contact } from '~/utils/enums/Contact'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="border-tertiary relative mx-auto w-full rounded-3xl border px-4 py-6 xl:fixed xl:top-1/2 xl:left-8 xl:max-w-[300px] xl:-translate-y-1/2 xl:p-6"
  >
    <div class="mb-8 flex items-center justify-between">
      <h1 class="flex items-center gap-1 text-2xl font-bold" v-motion-fade>
        Johan
      </h1>
      <p class="text-xl" v-motion-fade>{{ t('profileCard.developer') }}</p>
    </div>

    <div class="mb-4 flex justify-center">
      <img
        src="~/assets/pngs/avatar.png"
        alt="Profile"
        class="border-tertiary h-[200px] w-[200px] rounded-full border-4"
      />
    </div>

    <div class="flex flex-col gap-3 text-center">
      <a :href="`mailto:${Contact.Email}`" class="text-lg font-semibold">{{
        Contact.Email
      }}</a>
      <p class="text-icons">{{ t('profileCard.based_in') }}</p>
    </div>

    <div class="my-6 flex justify-center gap-4">
      <a
        :href="Contact.GitHub"
        target="_blank"
        class="border-icons flex h-12 w-12 items-center justify-center rounded-full border-2"
      >
        <Icon
          name="mdi:github"
          class="text-icons h-6 w-6 transition-all duration-150 hover:text-white"
        />
      </a>

      <a
        :href="Contact.LinkedIn"
        target="_blank"
        class="border-icons flex h-12 w-12 items-center justify-center rounded-full border-2"
      >
        <Icon
          name="mdi:linkedin"
          class="text-icons h-6 w-6 transition-all duration-150 hover:text-white"
        />
      </a>
    </div>

    <a :href="`mailto:${Contact.Email}`">
      <Button
        type="button"
        classes="w-full md:w-fit md:mx-auto md:min-w-[200px]"
        v-motion-fade
      >
        <span class="flex items-center gap-2">
          <Icon name="mdi:email-outline" class="h-5 w-5" />

          {{ t('profileCard.hire_me') }}
        </span>
      </Button>
    </a>
  </div>
</template>
