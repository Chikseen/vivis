<template>
	<NuxtImg width="150" height="400" :src="src" alt="Image" loading="lazy" provider="cloudflare" placeholder
		fit='outside' format='webp' sizes="75px xs:150px sm:275px md:500px lg:750 xl:1250 xxl:1980"
		:quality="quality" />
</template>

<script lang="ts">
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		quality: {
			type: Number,
			default: 100
		},
	},
}
</script>