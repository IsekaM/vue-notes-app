<template>
  <div class="listSection">
    <section class="listSection__trashed show-section">
      <h2 class="listSection__h2">Trashed</h2>
      <ul class="trashedNotes" id="trashedNotes">
        <ListItem
          v-for="note in getTrashedNotes"
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
import ListItem from "../components/ListItem";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ListItem },
  computed: {
    ...mapGetters(["getTrashedNotes"])
  },

  methods: {
    ...mapActions(["removeNote"])
  }
};
</script>
