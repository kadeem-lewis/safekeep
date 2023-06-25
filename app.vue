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
<style>
/* @import "unocss/reset/tailwind.css"; */
</style>
