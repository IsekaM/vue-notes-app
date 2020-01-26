<template>
	<li class="listItem">
		<div class="listItem__cont">
			<button class="listItem__trash-btn" @click="$emit('delete-note')">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15.75"
					height="15"
					viewBox="0 0 21 20"
				>
					<g transform="translate(-179 -360)">
						<g transform="translate(56 160)">
							<path
								d="M130.35,216h2.1v-8h-2.1Zm4.2,0h2.1v-8h-2.1Zm-6.3,2h10.5V206h-10.5Zm2.1-14h6.3v-2h-6.3Zm8.4,0v-4h-10.5v4H123v2h3.15v14h14.7V206H144v-2Z"
								fill="#2d3142"
								fill-rule="evenodd"
							/>
						</g>
					</g>
				</svg>
			</button>
			<div class="listItem__title" contenteditable="true">{{ title }}</div>
			<div class="listItem__body" contenteditable="true">{{ body }}</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "ListItem",
	props: ["title", "body"]
};
</script>
