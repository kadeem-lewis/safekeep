<template>
  <header>
    <Icon icon="solar:hamburger-menu-linear" :inline="true" />
    <h1>Notes</h1>
    <SearchBar />
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SearchBar from '../SearchBar.vue'
</script>
