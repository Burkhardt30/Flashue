import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import QuizView from '../views/QuizView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/quiz',
		name: 'quiz',
		component: QuizView
	},
	{
		path: '/history',
		name: 'history',
		component: HistoryView
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	linkActiveClass: 'text-green-500'
})

export default router
