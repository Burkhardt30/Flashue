<script setup lang="ts">
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../composables/constants'
</script>

<template>
	<nav class="sticky bottom-0 z-10 bg-zinc-700 text-2xl shadow-2xl shadow-black">
		<ul class="flex divide-x divide-zinc-600">
			<NavItem v-for="navItem in NAV_ITEMS" :key="navItem.name" :nav-item="navItem" />
		</ul>
	</nav>
</template>
