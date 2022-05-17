<template>
  <v-app>
    <Menu/>
    <v-main>
      <v-parallax dark height="100%"  :src="require('./assets/background.png')">
        <router-view></router-view>
      </v-parallax>

    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu/Menu';

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
