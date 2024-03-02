<script setup lang="ts">
import HeadPanel from './components/HeadPanel/HeadPanel.vue'
import NavMenu from './components/NavMenu/NavMenu.vue'
import OverView from './components/OverView/OverView.vue';
import TableView from './components/TableView/TableView.vue';

</script>

<template>
  <div>
    <header>
        <HeadPanel />
    </header>
    <main class="main">
        <div class="main_content">
          <div class="content_nav">
            <NavMenu />
          </div>
          <OverView />
          <TableView />
        </div>
    </main>
  </div>
</template>

<style scoped>
    main {
      max-width: 1920px;
    }


</style>
