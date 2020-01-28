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
          @move-to-trash="removeNote(note.id)"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import { toTrash } from "../mixins/moveToTrash";
import { mapGetters } from "vuex";

export default {
  mixins: [toTrash],
  computed: {
    ...mapGetters(["getFavNotes"])
  }
};
</script>
