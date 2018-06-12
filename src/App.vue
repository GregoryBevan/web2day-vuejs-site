<template>
    <div id="app">
        <header-bar></header-bar>
        <app-content></app-content>
    </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import AppContent from "./components/AppContent";

export default {
  name: "app",
  components: {
    HeaderBar,
    AppContent
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #052e40 !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
