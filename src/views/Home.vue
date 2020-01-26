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
				/>
			</ul>
		</section>
	</div>
</template>

<script>
import ListItem from "../components/ListItem";
import { mapGetters } from "vuex";

export default {
	name: "home",
	components: { ListItem },
	computed: {
		...mapGetters(["getOtherNotes", "getFavNotes"])
	},

	created() {
		console.log(this.getOtherNotes);
		console.log([...this.getFavNotes]);
	}
};
</script>
