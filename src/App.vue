<script setup>
import TopNav from './components/TopNav.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Achievement from './components/Achievement.vue'
import Plan from './components/Plan.vue'
import Contact from './components/Contact.vue'
import BottomNav from './components/BottomNav.vue'

</script>

<template>
  <TopNav></TopNav>
  <Home></Home>
  <About></About>
  <Skills></Skills>
  <Achievement></Achievement>
  <Plan></Plan>
  <Contact></Contact>
  <BottomNav></BottomNav>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: Rubik;
  src: url(./assets/Rubik/Rubik-VariableFont_wght.ttf);
}

body {
  font-family: Rubik;
}

a {
  color: black;
  text-decoration: none;
  outline: none;
}
</style>
