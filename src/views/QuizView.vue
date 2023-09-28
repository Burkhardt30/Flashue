<script setup>
import { ref, computed, provide, inject } from 'vue'
import QuizCard from '../components/QuizCard.vue'
import TheCongratulation from '../components/TheCongratulation.vue'
import TheTryAgain from '../components/TheTryAgain.vue'

const cards = inject('quizCards')

const displayedCard = ref(0)

const rightAnswersAmount = ref(0)

const isComplete = computed(() => (rightAnswersAmount.value === cards.value.length ? true : false))

const inProcess = computed(() => (displayedCard.value < cards.value.length ? true : false))

function answer(card, answer) {
	nextCard()

	recordAnswer(card, answer)

	if (!inProcess.value) countRightAnswersAmount()
}

function nextCard() {
	displayedCard.value++
}

function recordAnswer(card, answer) {
	card.isAnswered = answer
}

function countRightAnswersAmount() {
	cards.value.forEach(({ isAnswered }) => (isAnswered ? rightAnswersAmount.value++ : undefined))
}

function resetQuiz() {
	displayedCard.value = 0
	rightAnswersAmount.value = 0
}

provide('totalAnswers', cards.value.length)
provide('rightAnswersAmount', rightAnswersAmount)
</script>

<template>
	<div class="mx-auto max-w-4xl py-16">
		<ul v-if="inProcess">
			<QuizCard
				v-for="card in cards"
				:key="card.id"
				:card="card"
				:displayed-card="displayedCard"
				@answer="answer"
			/>
		</ul>
		<component
			v-else
			:is="isComplete ? TheCongratulation : TheTryAgain"
			@reset-quiz="resetQuiz"
		/>
	</div>
</template>
