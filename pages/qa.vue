<template>
  <div class="qa">
    <Contents :content="content" />
    <div class="filter-wrapper">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="category" label="質問カテゴリ" v-model="currentlyCategory" @change="changeCategory($event)" ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="author" label="回答者" v-model="currentlyAuthor" @change="changeAuthor($event)" />
        </v-col>
      </v-row>
    </div>
    <div class="questions-wrapper" v-for="(item,i) in displayQuestions" :key="i">
      <QuestionBox :item="item" />
    </div>
  </div>
</template>

<script>
import Contents from '~/components/layouts/Contents.vue';
import QuestionBox from '~/components/layouts/QuestionBox.vue';
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
    QuestionBox,
  },
  data() {
    return {
      author: [
        'すべて',
        'YC教育支援センター',
        'SC学生団体連合会本部',
        'YC学生団体連合会横浜分室',
        'vRSA運営チーム'
      ],
      category: [
        'すべて',
        '⼊学前準備関係',
        '履修関係',
        '資格関係',
        '証明書関係',
        '留学プログラム',
        '用具関係',
        '学生生活',
        'サークル関係',
      ],
      currentlyAuthor: null,
      currentlyCategory: null,
      displayQuestions: [],
    }
  },
  methods: {
    changeAuthor: function(e) {
      if(this.currentlyCategory === null){ // authorを変更した時、categoryがnullだったらcategoryも全てに変更する
        this.currentlyCategory = 'すべて';
      }

      if(e === 'すべて') { // authorがすべてに変更されたら、表示される配列にすべてブチ込む
        this.displayQuestions = this.questions;
      }
      else { // authorがすべて以外のときは、変更された値のauthorのものをとってくる
        this.displayQuestions = this.questions.filter(i => i.author === e);
      };

      if(this.currentlyCategory !== 'すべて') { // ここからカテゴリの絞り込み処理。カテゴリがすべて以外だったら現在選択されているカテゴリのものに絞り込む
        const self = this;
        this.displayQuestions = this.displayQuestions.filter(i => i.category === self.currentlyCategory);
      }
    },
    changeCategory: function(e) {
      if(this.currentlyAuthor === null) {
        this.currentlyAuthor = 'すべて';
      }
      if(e === 'すべて') {
        this.displayQuestions = this.questions;
      }
      else {
        this.displayQuestions = this.questions.filter(i => i.category === e);
      };
      if(this.currentlyAuthor !== 'すべて') {
        const self = this;
        this.displayQuestions = this.displayQuestions.filter(i => i.author === self.currentlyAuthor);
      }
    },
  },
  async asyncData({ app }) {
    const info = await app.$axios.$get('https://api.tcu-vrsa.net/pages/4');
    const qaData = await app.$axios.$get('https://api.tcu-vrsa.net/questions'); 
    return {
      content: info,
      questions: qaData
    };
  }
}
</script>

<style>

</style>