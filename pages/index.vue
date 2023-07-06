<template>
  <div>
    <NoteCard />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth", layout: "main" });
</script>
