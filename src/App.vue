<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import SidePanel from './components/layout/SidePanel.vue'
import MainArea from './components/app/MainArea.vue'
</script>

<template>
  <AppHeader />
  <main class="flex">
    <SidePanel />
    <MainArea />
  </main>
</template>
