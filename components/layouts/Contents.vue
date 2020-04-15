<template>
  <div class="contents">
    <h1>{{content.title}}</h1>
    <p>最終更新: {{formatDate(content.updated_at)}}</p>
    <div class="snsbtn">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" :data-url="getUrl()" data-color="default" data-size="small" data-count="true" style="display: none;"></div>
      <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
    </div>
    <div v-html="$md.render(content.content)" />
  </div>
</template>

<script>
export default {
  props: [
    'content',
  ],
  methods: {
    getUrl: function() {
      return `https://tcu-vrsa.net${this.$route.path}`
    },
    formatDate: function (date) {
      return this.$moment(date).format('YYYY/MM/DD hh:mm');
    }
  }

}
</script>

<style>
.contents {
  padding: 0 1rem;
  line-height: 200%;
}
.snsbtn {
  text-align: center;
  margin-top: 30px;
}
h1 {
  margin-top: 1rem;
}
h2 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2rem;
  padding: 0.4em 0.5em;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #DDDDDD; 
  border-left: 5px solid #2196F3;
}
h3 {
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.4em ;
  border-left: 2px solid #2196F3;
}
p {
  margin: 0.5rem 0;
  max-width: 100%;
}
img {
  width: 100%;
  margin: 1rem auto;
}
ul {
  margin-left: 1rem;
  padding-left: 1rem;
}
</style>