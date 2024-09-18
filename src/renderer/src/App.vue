<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="navbar top-0 sticky h-8 bg-base-200 select-none">Heading</div>
  <RouterView />
</template>
