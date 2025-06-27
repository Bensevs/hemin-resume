<script setup lang="ts">
import { ref } from 'vue'
import myAvatar from './assets/avatar.jpg'


const showContact = ref(false)

const skills = [
  { name: 'English', level: 'C1 - Advanced', progress: 80 },
  { name: 'German', level: 'B2 - Upper Intermediate', progress: 65 },
  { name: 'French', level: 'B1 - Intermediate', progress: 50 },
  { name: 'IELTS', level: '7.0 (2022)', progress: 75 },
  { name: 'TestDaF', level: 'TDN 3 (2023)', progress: 60 },
]

const services = [
  { icon: 'book-outline', title: 'English Language Teaching', description: 'Comprehensive courses for all levels.' },
  { icon: 'language-outline', title: 'German Language Teaching', description: 'Effective methods with native-level content.' },
  { icon: 'document-text-outline', title: 'Exam Preparation', description: 'IELTS, TestDaF and more.' },
  { icon: 'videocam-outline', title: 'Private & Online Classes', description: 'Personalized sessions tailored for you.' },
]
</script>

<template>
  <n-layout>
    <n-layout-header bordered class="px-4 py-2 bg-primary text-white">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold">Hemin Fallahi</div>
        <div class="space-x-2">
          <n-button text @click="() => scrollToSection('intro')">Intro</n-button>
          <n-button text @click="() => scrollToSection('resume')">Resume</n-button>
          <n-button text @click="() => scrollToSection('skills')">Skills</n-button>
          <n-button text @click="() => scrollToSection('services')">Services</n-button>
        </div>
      </div>
    </n-layout-header>

    <n-layout-content class="p-4 bg-[#FDF5E6]">

      <!-- Intro Section -->
      <section id="intro" class="my-12 text-center">
        <div class="h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white fade-in" style="background-image: url('/your-banner-image.jpg')">
          <h1 class="text-3xl font-bold mb-2">Hemin Fallahi</h1>
          <h2 class="text-xl mb-4">Linguist | Frontend Developer | Teacher</h2>
          <n-button type="info" @click="showContact = true">Contact Me</n-button>
        </div>
      </section>

      <!-- Avatar and Text -->
      <section class="my-12">
        <n-grid :cols="12" :x-gap="16">
          <n-grid-item :span="4" class="flex justify-center items-center">
            <img :src="myAvatar" alt="avatar" class="rounded-full w-[150px] h-[150px] object-cover shadow-md" />
          </n-grid-item>
          <n-grid-item :span="8">
            <h1 class="text-2xl font-bold mb-2">Hemin Fallahi</h1>
            <h2 class="text-xl mb-4">Linguist | Frontend Developer | Teacher</h2>
            <p class="mb-4">Passionate about languages, teaching, and software development. Experienced in Vue.js, TypeScript, and digital pedagogy.</p>
            <n-button type="info" @click="showContact = true">Contact Me</n-button>
          </n-grid-item>
        </n-grid>
      </section>

      <!-- Resume Section -->
      <section id="resume" class="my-16">
        <n-card title="Resume">
          <n-thing title="B.A. in German Language and Literature" description="Shahid Beheshti University, 2018-2022">
            Graduated with GPA 19.00/20.
          </n-thing>
          <n-thing title="Freelance Tutor & University Instructor" description="2022 - Present">
            Teaching English and German languages, creating digital pedagogy content.
          </n-thing>
          <n-thing title="Frontend Developer" description="2023 - Present">
            Specializing in Vue.js, TypeScript, and UI/UX design.
          </n-thing>
        </n-card>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="my-16 text-center">
        <h2 class="text-2xl font-bold mb-6">Languages & Tests</h2>
        <n-grid :cols="3" :x-gap="16" :y-gap="16">
          <n-grid-item v-for="(skill, i) in skills" :key="i">
            <n-card>
              <div class="font-medium">{{ skill.name }}</div>
              <div class="mb-2">{{ skill.level }}</div>
              <n-progress type="line" :percentage="skill.progress" />
            </n-card>
          </n-grid-item>
        </n-grid>
      </section>

      <!-- Services Section -->
      <section id="services" class="my-16 text-center">
        <h2 class="text-2xl font-bold mb-6">Our Services</h2>
        <n-grid :cols="4" :x-gap="16" :y-gap="16">
          <n-grid-item v-for="(service, i) in services" :key="i">
            <n-card>
              <n-icon size="24">{{ service.icon }}</n-icon>
              <h3 class="mt-2 font-bold">{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </n-card>
          </n-grid-item>
        </n-grid>
      </section>

      <!-- Contact Modal -->
      <n-modal v-model:show="showContact">
        <n-card title="Contact Me" closable @close="showContact = false">
          <n-space vertical>
            <n-button tag="a" href="mailto:orhemin@gmail.com" type="primary">📧 orhemin@gmail.com</n-button>
            <n-button tag="a" href="tel:+989142081829" type="primary">📞 +98 914 208 1829</n-button>
            <n-button tag="a" href="https://t.me/yourtelegram" type="primary" target="_blank">Telegram</n-button>
            <n-button tag="a" href="https://linkedin.com/in/heminfallahi" type="primary" target="_blank">LinkedIn</n-button>
            <n-button tag="a" href="https://wa.me/989142081829" type="primary" target="_blank">WhatsApp</n-button>
          </n-space>
        </n-card>
      </n-modal>

    </n-layout-content>
  </n-layout>
</template>

<script lang="ts">
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1.2s ease-in-out forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
