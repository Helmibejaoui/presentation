<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
    <v-navigation-drawer hide-overlay v-model="sidebar" app>
      <v-list>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/about">About</v-list-item>
        <v-list-item to="/contact">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar-title v-text="name"></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-row class="hidden-sm-and-down" justify="end">
      <v-btn class="mr-2" color="primary" to="/" v-text="'Home'"></v-btn>
      <v-btn class="mr-2" to="/about" v-text="'About'"></v-btn>
      <v-btn class="mr-2" to="/contact" v-text="'Contact'"></v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    name: 'Helmi Bejaoui',
    sidebar: false,
  })
}
</script>

<style scoped>

</style>