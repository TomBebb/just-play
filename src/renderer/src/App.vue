<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="top-0 sticky h-8 bg-primary-content text-primary select-none">Heading</div>
  <RouterView />
</template>
