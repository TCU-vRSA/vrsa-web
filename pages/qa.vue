<template>
  <div class="qa">
    <Contents :content="content" />
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
export default {
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