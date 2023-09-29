import { defineStore } from 'pinia'
import { generateQuizCards } from '../composables/functions'

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    quizCards: generateQuizCards()
  }),
  // getters: {
  //   isComplite: (state) => rightAnswersAmount.value === state.quizCards.length ? true : false
  // }
})
