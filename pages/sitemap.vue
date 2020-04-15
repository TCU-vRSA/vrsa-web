<template>
  <div class="article">
    <h2>記事一覧</h2>
    <v-card>
      <v-list>
        <v-subheader>記事一覧</v-subheader>
        <v-list-item v-for="(item, i) in content" :key="i" router :to="getUrl(item.id)">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    getUrl: function(id) {
      return `/article/${id}`
    }
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('https://api.tcu-vrsa.net/articles');
    return {
      content: response
    };
  }
}
</script>

<style>

</style>