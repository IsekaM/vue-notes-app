<template>
  <div id="app">
    <Header />
    <nav class="nav">
      <NavLinks />
      <Footer />
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import Footer from "./components/Footer";
export default {
  components: { Header, NavLinks, Footer }
};
</script>
