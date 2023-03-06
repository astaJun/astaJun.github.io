<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import Gitalk from "./Gitalk.vue";
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Gitalk/>
    </template>
  </Layout>
</template>
