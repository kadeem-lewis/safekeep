<template>
  <div class="hidden sm:block">
    <label for="icon" class="sr-only">Search</label>
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4"
      >
        <Icon
          name="material-symbols:search-rounded"
          class="text-grey-400 text-xl"
        />
      </div>
      <input
        type="text"
        id="icon"
        name="icon"
        class="py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
