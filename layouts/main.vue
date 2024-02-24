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
    <main class="pt-16 flex">
      <SideBar />
      <aside>
        <menu class="list-none font-medium">
          <li>
            <Icon
              name="uil:notes"
              :inline="true"
            />Notes
          </li>
          <li>
            <Icon
              name="solar:trash-bin-2-linear"
              :inline="true"
            />Bin
          </li>
          <li>
            <Icon
              name="solar:archive-bold"
              :inline="true"
            />Archive
          </li>
        </menu>
      </aside>
      <slot />
    </main>
  </div>
</template>
