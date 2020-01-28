<template>
  <ul class="nav__cont">
    <router-link :to="info.to" v-for="info in buttonInfo" :key="info.id">
      <li
        class="nav__item"
        :class="{ active: info.active }"
        id="nav__item-all"
        @click="setActive(info.id)"
      >
        <i class="nav__item-img"><img :src="info.img" alt="" height="20px"/></i>
        <span class="nav__item-text">{{ info.text }}</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "NavLinks",
  data() {
    return {
      buttonInfo: [
        {
          id: 1,
          to: "/",
          img: "./assets/vect/all-notes.svg",
          text: "All Notes",
          active: true
        },
        {
          id: 2,
          to: "/favourites",
          img: "./assets/vect/favourite.svg",
          text: "Favourites",
          active: false
        },
        {
          id: 3,
          to: "/archived",
          img: "./assets/vect/archive.svg",
          text: "Archived",
          active: false
        },
        {
          id: 4,
          to: "/trashed",
          img: "./assets/vect/trash.svg",
          text: "Trashed",
          active: false
        }
      ]
    };
  },
  methods: {
    setActive(id) {
      this.buttonInfo.map(info => (info.active = false));
      const fetchId = this.buttonInfo.find(info => info.id === id);
      fetchId.active = true;
    }
  }
};
</script>
