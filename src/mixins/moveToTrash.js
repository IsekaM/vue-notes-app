import { mapActions } from "vuex";
import ListItem from "../components/ListItem";

export const toTrash = {
  components: { ListItem },
  methods: {
    ...mapActions(["moveToTrash"]),
    toTrash(note) {
      this.moveToTrash(note);
    }
  }
};
