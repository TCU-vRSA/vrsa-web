<template>
  <div class="question-box">
    <v-card>
      <v-card-title>{{item.question}}</v-card-title>
      <v-card-subtitle>{{item.author}}</v-card-subtitle>
      <v-card-actions>
        <v-btn icon @click="show = !show"><v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />
          <v-card-text>{{item.answer}}</v-card-text>
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