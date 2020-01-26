<template>
  <div id="app">
    <Header />
    <nav class="nav">
      <ul class="nav__cont">
        <router-link to="/">
          <li class="nav__item active" id="nav__item-all">
            <i class="nav__item-img"
              ><img src="./assets/vect/all-notes.svg" alt="" height="20px"
            /></i>
            <span class="nav__item-text">All Notes</span>
          </li>
        </router-link>

        <router-link to="/favourites">
          <li class="nav__item" id="nav__item-fav">
            <i class="nav__item-img"
              ><img src="./assets/vect/favourite.svg" alt="" height="20px"
            /></i>
            <span class="nav__item-text">Favourites</span>
          </li>
        </router-link>

        <router-link to="/archived">
          <li class="nav__item" id="nav__item-archived">
            <i class="nav__item-img"
              ><img src="./assets/vect/archive.svg" alt="" height="20px"
            /></i>
            <span class="nav__item-text">Archived</span>
          </li>
        </router-link>

        <router-link to="/trashed">
          <li class="nav__item" id="nav__item-trash">
            <i class="nav__item-img"
              ><img src="./assets/vect/trash.svg" alt="" height="20px"
            /></i>
            <span class="nav__item-text">Trash</span>
          </li>
        </router-link>
      </ul>
      <div class="footer">
        <p>
          Product of Jamaica <br />
          Copyright 2019 -
          <a href="mailto:makmorrison@gmail.com">Makesi Morrison</a>
        </p>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: { Header }
};
</script>
