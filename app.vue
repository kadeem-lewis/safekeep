<template>
  <div>
    <header class="flex justify-between items-center fixed top-0">
      <Icon
        name="solar:hamburger-menu-linear"
        :inline="true"
        class="text-2xl"
      />
      <h1>Notes</h1>
      <SearchBar />
      <div>
        <button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
      </div>
    </header>
    <main class="pt-16 flex">
      <aside>
        <menu class="list-none font-medium">
          <li><Icon name="uil:notes" :inline="true" />Notes</li>
          <li><Icon name="solar:trash-bin-2-linear" :inline="true" />Bin</li>
          <li><Icon name="solar:archive-bold" :inline="true" />Archive</li>
        </menu>
      </aside>
      <NuxtPage />
    </main>
  </div>
</template>
<script setup lang="ts">
const { status, signIn, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");

async function handleSignOut() {
  await signOut();
}
</script>
<style>
/* @import "unocss/reset/tailwind.css"; */
</style>
