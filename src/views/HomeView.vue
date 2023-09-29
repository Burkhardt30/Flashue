<script setup lang="ts"></script>

<template>
	<h1 class="mb-12 text-center text-5xl font-bold">My quizzes</h1>
	<ul class="mx-auto flex max-w-4xl flex-col gap-4 px-4">
		<li
			class="flex items-center justify-between rounded-xl border-green-500 bg-zinc-700 px-9 py-6"
		>
			<div class="text-3xl">English grammar</div>
			<RouterLink to="/quiz" class="text-2xl duration-300 hover:text-green-500">
				START
			</RouterLink>
		</li>
	</ul>
</template>
