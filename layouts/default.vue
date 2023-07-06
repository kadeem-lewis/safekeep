<template>
  <div>
    <AppHeader />
    <header class="flex justify-between items-center fixed top-0">
      <Icon
        name="solar:hamburger-menu-linear"
        :inline="true"
        class="text-2xl"
      />
    </header>
    <main class="w-full max-w-md mx-auto p-6">
      <slot />
    </main>
  </div>
</template>
