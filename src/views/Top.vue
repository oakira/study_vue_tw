<template>
   <div class="home">
     <img class="tw-m-auto" alt="Vue logo" src="../assets/logo.png">
     <HelloWorld msg="Welcome to Your Vue.js App"/>
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import VueHead from 'vue-head'
Vue.use(VueHead, {
  separator: ''
})

export default {
  name: 'Top',
  created () {
    // init
  },
  components: {
    HelloWorld
  },
  head: {
    title () {
      const META = this.$store.getters.meta.top
      return {
        inner: META.title
      }
    },
    meta () {
      const META = this.$store.getters.meta.top
      return [
        { name: 'og:title', content: META.title },
        { name: 'description', content: META.description },
        { name: 'keywords', content: META.keywords }
      ]
    }
  }
}
</script>
