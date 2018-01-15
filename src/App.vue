<template>
  <div id="app" :style="{ marginLeft: leftMargin}">
    <div id="hamburger" @click="isMenuOpen = !isMenuOpen">
      <div class="hamburger"></div>
      <div class="hamburger"></div>
      <div class="hamburger"></div>
    </div>
    <app-menu v-if="isMenuOpen"></app-menu>
    <router-view id="content"></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import about from './components/about.vue';
import workplaces from './components/workplaces.vue';
import footer from './components/footer.vue';
import menu from './components/menu.vue';

export default {

  data() {
    return {
      isMenuOpen : false
    }
  },

  computed: {
    leftMargin() {
      return (this.isMenuOpen ? '250' : '0') + 'px';
    }
  },

  components: {
    appAbout: about,
    appWorkplaces: workplaces,
    appFooter: footer,
    appMenu: menu
  },

  methods: {
  }
}
</script>

<style>

@font-face {
  font-family: ness;
  src: url('./media/ness.ttf');
}

#hamburger {
  position: fixed;
  float: left;
  cursor: pointer;
}

#app {
  font-family: ness, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5c6e80;
  margin-top: 50px;
  padding-left: 20px;
}

h1, h2 {
  color: #FF64FF;
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

body {
  background-color: #333;
  color: #ccc;
}

hr {
  border-color: #171717;
}

.hamburger {
  width: 35px;
  height: 5px;
  background-color: #171717;
  margin: 6px 0;
}

a, a:visited {
  color: #FF64FF;
}

.pagetitle {
  color: #FEED23;
}

#content {
  margin-left: 40px;
}

.list > li {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
}

</style>
