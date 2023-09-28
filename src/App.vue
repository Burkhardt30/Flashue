<script setup>
import { ref, provide } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { generateQuizCards } from './functions'

const quizCards = ref(generateQuizCards())

provide('quizCards', quizCards)
</script>

<template>
	<TheHeader />

	<main class="flex-grow">
		<RouterView />
	</main>

	<TheNav />
</template>
