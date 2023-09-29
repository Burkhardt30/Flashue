import { QUESTIONS_AND_ANSWERS } from './constants'

export function generateQuizCards() {
	return QUESTIONS_AND_ANSWERS.map(({ question, answer }, id) => {
		return {
			id,
			question: `${(id + 1).toString().repeat(5)}${question}`,
			answer: `${(id + 1).toString().repeat(5)}${answer}`,
			isAnswered: false
		}
	})
}
