<script setup lang="ts">
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

useHead({
  title: 'RINCON BRAZILLIER Johan | Portfolio',
  meta: [
    {
      name: 'description',
      content:
        "Hi there! I'm Johan, a passionate developer showcasing my work in this portfolio. Get in touch! 📱",
    },
    {
      name: 'keywords',
      content: ['Developer', 'Portfolio', 'Developer Portflio'],
    },
  ],
})
</script>

<template>
  <!-- LangueSwitcher -->
  <LanguageSwitcher />

  <!-- Menus -->
  <DesktopMenu />
  <MobileMenu />

  <!-- Sections -->
  <main
    class="flex flex-col gap-20 overflow-x-hidden xl:mx-auto xl:max-w-lg xl:gap-[400px] 2xl:max-w-3xl"
  >
    <ProfileCard />
    <HeroSection />
    <About />
    <Experiences />
    <Projects />
    <Educations />
    <Contact />
    <Footer />
  </main>
</template>
