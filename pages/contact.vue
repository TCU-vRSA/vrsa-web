<template>
  <div class="contact">
    <Contents :content="content" />
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_8zsc81TUDNHT6sGWApnYBZyW5M_f2OeNH8e1IK5sTtI0zg/viewform?embedded=true" class="contact-form" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
export default {
  components: {
    Contents,
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('https://api.tcu-vrsa.net/pages/6');
    return {
      content: response
    };
  }
}
</script>

<style>
.contact-form {
  width: 100%;
  height: 1500px;
  margin-top: 30px;
}
</style>