<script setup lang="ts">
import HeadPanel from './components/HeadPanel/HeadPanel.vue'
import NavMenu from './components/NavMenu/NavMenu.vue'
</script>

<template>
  <div>
    <header>
      <div class="container">
        <HeadPanel />
      </div>
    </header>
    <main class="main">
      <div class="container">
        <div>
          <NavMenu />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .main {
    background-color: #EDEEF0;
    padding: 20px 0;
  }

</style>
