<template>
	<div class="footer">
		<p>
			Product of Jamaica <br />
			Copyright {{ date }} -
			<a href="mailto:makmorrison@gmail.com">Makesi Morrison</a>
		</p>
	</div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			date: new Date().getFullYear()
		};
	}
};
</script>
