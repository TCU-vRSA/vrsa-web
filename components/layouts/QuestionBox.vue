<template>
  <div class="question-box">
    <v-card @click="show = !show">
      <v-card-title>{{item.question}}</v-card-title>
      <v-card-subtitle>カテゴリ: {{item.category}} | 回答者: {{item.author}}</v-card-subtitle>
      <v-card-actions>
        <v-btn icon><v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />
          <v-card-text style="white-space: pre-line">{{item.answer}}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ],
  data() {
    return {
      show: null,
    }
  }

}
</script>

<style>
.question-box {
  margin-bottom: 10px;
}
</style>