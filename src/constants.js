import { HomeIcon, ClockIcon } from '@heroicons/vue/24/solid'

export const PAGE_HOME = 'home'
export const PAGE_HISTORY = 'history'

export const PAGES = [
	PAGE_HOME,
	PAGE_HISTORY
]

export const NAV_ITEMS = {
	[PAGE_HOME]: {
		path: '/',
		name: 'My quizzes',
		icon: HomeIcon
	},
	[PAGE_HISTORY]: {
		path: '/history',
		name: 'History',
		icon: ClockIcon
	}
}

export const QUESTIONS_AND_ANSWERS = [
	{
		question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam et, molestias voluptate, nulla qui sequi quaerat praesentium minus ducimus quia dicta, placeat tempora. Placeat debitis illo perspiciatis maiores pariatur?',
		answer: 'Lorem ipsum dolor sit amet.',
	},
	{
		question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam et, molestias voluptate, nulla qui sequi quaerat praesentium minus ducimus quia dicta, placeat tempora. Placeat debitis illo perspiciatis maiores pariatur?',
		answer: 'Lorem ipsum dolor sit amet.',
	}
]