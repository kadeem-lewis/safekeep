<template>
  <header>
    <Icon name="solar:hamburger-menu-linear" :inline="true" />
    <h1>Notes</h1>
    <SearchBar />
  </header>
  <main>
    <SidePanel />
    <slot />
  </main>
</template>
