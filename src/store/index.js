import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        title: "What I need for breakfast",
        body: "Milk and cereal",
        favourite: true,
        trashed: false,
        archived: false
      },
      {
        id: 2,
        title: "Reminder",
        body: "Get eggs from the grocery store",
        favourite: false,
        trashed: false,
        archived: false
      },
      {
        id: 3,
        title: "Delete songs from playlist",
        body: "Go into spotify and delete old songs from playlist",
        favourite: false,
        trashed: true,
        archived: false
      },
      {
        id: 4,
        title: "My name Jeff",
        body: "Just a random note",
        favourite: false,
        trashed: true,
        archived: false
      },
      {
        id: 5,
        title: "Cool Runnings Water Park",
        body: "What ever you wanna do just do it bitch",
        favourite: true,
        trashed: false,
        archived: false
      }
    ]
  },
  getters: {
    getFavNotes: state => {
      return state.notes.filter(note => {
        return (
          note.favourite === true &&
          note.trashed === false &&
          note.archived === false
        );
      });
    },

    getOtherNotes: state => {
      return state.notes.filter(note => {
        return (
          note.favourite === false &&
          note.trashed === false &&
          note.archived === false
        );
      });
    },

    getArchivedNotes: state => {
      return state.notes.filter(
        note => note.archived === true && note.trashed === false
      );
    },

    getTrashedNotes: state => {
      return state.notes.filter(note => note.trashed === true);
    }
  },

  mutations: {
    REMOVE_NOTE: (state, note) => {
      const index = state.notes.findIndex(single => single.id === note);
      state.notes.splice(index, 1);
    },

    MOVE_TO_TRASH: (state, note) => {
      state.notes.map(single => {
        if (single.id === note) {
          single.trashed = true;
        }
      });
    }
  },
  actions: {
    removeNote: (context, note) => context.commit("REMOVE_NOTE", note),
    moveToTrash: (context, note) => context.commit("MOVE_TO_TRASH", note)
  },
  modules: {}
});
