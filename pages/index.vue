<template>
  <div class="index">
    <Contents :text="content.content" />
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
export default {
  components: {
    Contents,
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('https://api.tcu-vrsa.net/pages/1');
    return {
      content: response
    };
  }
}
</script>
