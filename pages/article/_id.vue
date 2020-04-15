<template>
  <div class="article">
    <Contents :content="content" />
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
export default {
  components: {
    Contents,
  },
  async asyncData({ app, params }) {
    const response = await app.$axios.$get(`https://api.tcu-vrsa.net/articles/${params.id}`);
    return {
      content: response
    };
  }
}
</script>

<style>

</style>