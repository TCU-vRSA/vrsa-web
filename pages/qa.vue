<template>
  <div class="qa">
    <Contents :content="content" />
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
export default {
  head() {
    return {
      title: this.content.title + ' | TCU vRSA - 都市大非公認学生リモートサポートチーム',
      meta: [
        { hid: 'description', name: 'description', content: '東京都市大学非公認・リモート学生アシスタントチーム「vRSA」の公式Webサイトです。' },
        { hid: 'og:title', name: 'og:title', content: this.content.title + ' | TCU vRSA - 都市大非公認学生リモートサポートチーム' },
        { hid: 'og:url', name: 'og:url', content: 'https://tcu-vrsa.net/qa' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:description', name: 'og:description', content: '東京都市大学非公認・リモート学生アシスタントチーム「vRSA」の公式Webサイトです。' },
        { hid: 'og:image', property: 'og:image', content: 'https://tcu-vrsa.net/img/ogp.png' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'TCU vRSA - 都市大非公認学生リモートサポートチーム' },
        { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      ]
    }
  },
  components: {
    Contents,
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('https://api.tcu-vrsa.net/pages/4');
    return {
      content: response
    };
  }
}
</script>

<style>

</style>