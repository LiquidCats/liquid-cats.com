<template>
  <div class="max-w-9/12 min-h-dvh mx-auto  text-gray-800 dark:text-gray-50 flex flex-col gap-3">
    <div>
      <h1 class="text-6xl">Liquid Cats (projects)</h1>
    </div>
    <slot />
    <div class="flex flex-row items-center justify-center">
      <div>
        <Button variant="link" as-child>
          <a href="https://ishabanov.com" target="_blank">&copy; Ilya Shabanov</a>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Button} from "~/components/ui/button";
</script>