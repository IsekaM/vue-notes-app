<template>
  <div class="listSection">
    <section class="listSection__archived show-section">
      <h2 class="listSection__h2">Archived</h2>
      <ul class="archivedNotes" id="archivedNotes">
        <ListItem
          v-for="note in getArchivedNotes"
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
import { toTrash } from "../mixins/moveToTrash";
import { mapGetters } from "vuex";
export default {
  mixins: [toTrash],
  computed: {
    ...mapGetters(["getArchivedNotes"])
  }
};
</script>
