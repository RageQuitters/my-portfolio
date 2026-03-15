<template>
  <NavBar />
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  <EducationSection />
  <ProjectsSection />
  <ContactSection />
  <SiteFooter />
</template>

<script setup>
import NavBar           from '@/components/sections/NavBar.vue'
import HeroSection      from '@/components/sections/HeroSection.vue'
import AboutSection     from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ProjectsSection  from '@/components/sections/ProjectsSection.vue'
import ContactSection   from '@/components/sections/ContactSection.vue'
import SiteFooter       from '@/components/sections/SiteFooter.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>
