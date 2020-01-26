<template>
  <div class="listSection">
    <section class="listSection__favs show-section">
      <h2 class="listSection__h2">Favourites</h2>
      <ul class="favNotes" id="favNotes"></ul>
    </section>

    <section class="listSection__main show-section">
      <h2 class="listSection__h2">Other</h2>
      <ul class="mainNotes" id="mainNotes"></ul>
    </section>

    <section class="listSection__archived">
      <h2 class="listSection__h2">Archived</h2>
      <ul class="archivedNotes" id="archivedNotes"></ul>
    </section>

    <section class="listSection__trashed">
      <h2 class="listSection__h2">Trashed</h2>
      <ul class="trashedNotes" id="trashedNotes"></ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
