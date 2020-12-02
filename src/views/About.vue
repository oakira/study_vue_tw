<template>
  <div class="about tw-text-center tw-m-4">
    <h1>This is an About page</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'
Vue.use(VueHead)

export default {
  name: 'About',
  created () {
    // init
  },
  data: function () {
    return {
      // title: 'About',
      // description: 'aboutpage',
      // keywords: 'aboutpage'
    }
  },
  head: {
    title () {
      const META_COMMON = this.$store.getters.meta.common
      const META = this.$store.getters.meta.about
      return {
        inner: META.title,
        separator: '|',
        complement: META_COMMON.title
      }
    },
    meta () {
      const META = this.$store.getters.meta.about
      return [
        { name: 'og:title', content: META.title },
        { name: 'description', content: META.description },
        { name: 'keywords', content: META.keywords }
      ]
    }
  }
}
</script>
