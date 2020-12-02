<template>
  <div id="page">
    <Header />
    <div id="app">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  created () {
    this.fetchData()
  },
  components: {
    Header,
    Footer
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
      const META = this.$store.getters.meta.common
      document.querySelector("link[rel='icon']").setAttribute('href', location.origin + '/favicon.ico')
      document.querySelector("link[rel='apple-touch-icon']").setAttribute('href', location.origin + '/apple-touch-icon.png')
      document.querySelector("meta[property='og:url']").setAttribute('content', location.href)
      document.querySelector("meta[property='og:image']").setAttribute('content', location.origin + '/ogp.jpg')
      document.querySelector("meta[property='og:site_name']").setAttribute('content', META.title)
      // document.querySelector("meta[property='fb:app_id']").setAttribute('content', META.fb_appid)
    }
  }
}
</script>

<style lang="scss">
</style>
