<template>
  <div>
    <button @click="signIn('github')">Sign In With Github</button>
    <button>Sign In With Github</button>
    <button>Sign In Anonymously</button>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
</script>
