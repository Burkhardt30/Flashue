<script setup lang="ts">
import { ref } from 'vue'
import QuizFailButton from './QuizFailButton.vue'
import QuizSuccessButton from './QuizSuccessButton.vue'

defineProps(['displayedCard', 'card'])

const emit = defineEmits(['answer'])

const isFlipped = ref(false)

function flipCard(e: Event) {
  console.log(typeof e);

	if ((e.target as HTMLInputElement).closest('button')) return

	isFlipped.value = !isFlipped.value
}

</script>

<template>
	<li
		v-if="displayedCard === card.id"
		@click="flipCard"
		class="flex h-96 flex-col justify-center rounded-[2rem] bg-zinc-700 px-16 py-8 text-center text-2xl"
	>
		<div v-if="isFlipped" class="flex h-full flex-col">
			<p class="my-auto">{{ card.answer }}</p>
			<div class="flex items-center justify-between">
				<QuizFailButton @click="emit('answer', card, false)" />
				<QuizSuccessButton @click="emit('answer', card, true)" />
			</div>
		</div>
		<p v-else>
			{{ card.question }}
		</p>
	</li>
</template>
