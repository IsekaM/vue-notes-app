<template>
  <div class="listSection">
    <section class="listSection__favs show-section">
      <h2 class="listSection__h2">Favourites</h2>
      <ul class="favNotes" id="favNotes">
        <ListItem
          v-for="note in getFavNotes"
          :key="note.id"
          :body="note.body"
          :title="note.title"
          @move-to-trash="toTrash(note.id)"
        />
      </ul>
    </section>

    <section class="listSection__main show-section">
      <h2 class="listSection__h2">Other</h2>
      <ul class="mainNotes" id="mainNotes">
        <ListItem
          v-for="note in getOtherNotes"
          :key="note.id"
          :body="note.body"
          :title="note.title"
          @move-to-trash="toTrash(note.id)"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toTrash } from "../mixins/moveToTrash";

export default {
  name: "home",
  mixins: [toTrash],
  computed: {
    ...mapGetters(["getOtherNotes", "getFavNotes"])
  }
};
</script>
