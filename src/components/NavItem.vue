<script setup lang="ts">
defineProps({
	navItem: {
		required: true,
		type: Object
		// validator:
	}
})
</script>

<template>
	<li class="flex-grow">
		<RouterLink
			:to="navItem.path"
			class="flex items-center justify-center gap-2 py-4 duration-300 hover:text-green-500"
		>
			<component :is="navItem.icon" class="h-10" />
			{{ navItem.name }}
		</RouterLink>
	</li>
</template>
