<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'Landing page',
      htmlAttrs: {
        author: 'tokyo em technology',
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: 'Tokyo EM Technology & Co.は人々に等しくビジネスの機会を与えるアプリの作成者です。Tickets onFlowやAI based Stock Move Analysisなどの製品があります。' },
        { hid: 'keywords', name: 'keywords', content: 'Tokyo EM Technology, Tickets onFlow' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/ballot.png' },
        { rel: 'apple-touch-icon', size: '72x72', href: '/ballot.png' },
        { rel: 'apple-touch-icon', size: '114x114', href: '/ballot.png' },
        { rel: 'stylesheet', href: 'vendors/themify-icons/css/themify-icons.css' },
        { rel: 'stylesheet', href: 'vendors/owl-carousel/css/owl.carousel.css' },
        { rel: 'stylesheet', href: 'vendors/owl-carousel/css/owl.theme.default.css' },
        { rel: 'stylesheet', href: 'css/ollie.css' },
        ...i18nHead.link
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
