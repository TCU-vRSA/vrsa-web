<template>
  <v-app>
    <!-- タイトルバー -->
    <v-app-bar app clipped-left color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5 white--text">TCU vRSA</span>
      <v-spacer />
    </v-app-bar>

    <!-- ドロワーメニュー -->
    <v-navigation-drawer v-model="drawer" app clipped color="white">
      <v-list>
        <v-list-item router :to="item.to" :key="i" v-for="(item,i) in items" exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item router to="/sitemap" exact>
          <v-list-item-content>
            <v-list-item-title>記事一覧</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/article/3" exact>
          <v-list-item-content>
            <v-list-item-title>TCU vRSAについて</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 内容 -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-home", title: "トップページ", to: "/" },
        { icon: "mdi-laptop", title: "オンライン講義情報", to: "/online" },
        { icon: "mdi-apps", title: "サークル情報", to: "/club" },
        { icon: "mdi-reply", title: "Q&Aまとめ", to: "/qa" },
        { icon: "mdi-mail", title: "公式LINE", to: "/line" },
        { icon: "mdi-contacts", title: "お問い合わせ", to: "/contact" }
      ]
    };
  }
};
</script>
