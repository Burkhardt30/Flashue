<script setup>
import { inject } from 'vue'

const totalAnswers = inject('totalAnswers')
const rightAnswersAmount = inject('rightAnswersAmount')

const emit = defineEmits(['resetQuiz'])

</script>

<template>
	<div class="text-center">
		<p class="mb-6 text-8xl font-bold">Not Bad!</p>
		<p class="mb-6 text-2xl">
			Your result is:
			<br>
			<span class="text-5xl font-semibold">
				{{ `${rightAnswersAmount}/${totalAnswers}` }}
			</span>
		</p>
		<RouterLink
			to="/quiz"
			@click="emit('resetQuiz')"
			class="text-inherit mr-4 inline-flex h-16 items-center rounded-xl bg-zinc-700 px-8 duration-300 hover:text-green-500 text-2xl"
		>
			Try Again
		</RouterLink>
		<RouterLink
			to="/history"
			class="inline-flex h-16 items-center rounded-xl bg-zinc-700 px-8 duration-300 hover:text-green-500 text-2xl"
		>
			Details
		</RouterLink>
	</div>
</template>
