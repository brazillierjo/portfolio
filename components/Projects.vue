<script setup lang="ts">
import { links } from '~/utils/links'
import Tag from '~/components/ui/Tag.vue'
import ProjectCard from '~/components/ui/ProjectCard.vue'
import { useI18n } from 'vue-i18n'
import { useTranslatedProjects } from '~/hooks/useTranslatedProjects'

const { t } = useI18n()

const projects = useTranslatedProjects()
const introduceLink = links.find(link => link.id === 'projects')
</script>

<template>
  <section
    id="projects"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>
      my <span class="text-primary">projects</span>.
    </h1>

    <div class="grid grid-cols-1 gap-20">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>

    <a
      href="#contact"
      class="border-text text-text hover:bg-text hover:text-secondary w-fit items-center gap-2 rounded-full border-2 px-4 py-2 text-sm uppercase transition-all duration-300 lg:flex"
    >
      {{ t('projects.go_to_contact') }}
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>
