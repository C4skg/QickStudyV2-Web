<template>
	<v-app-bar flat>
		<v-container class="mx-auto d-flex align-center justify-center _navbar">
			<div class="logo rounded pa-2">
				<RouterLink to="/">
					<v-img
						width="40px"
						height="40px"
						:src="logo"
					></v-img>
				</RouterLink>
			</div>
			
			<v-btn
				v-for="link in links"
				:key="link"
				:text="link"
				variant="text"
			></v-btn>
	
			<v-spacer></v-spacer>
			
			<v-responsive :max-width="dynamicSearchWidth">
				<v-text-field
					density="compact"
					variant="solo-filled"
					flat
					hide-details
					placeholder="搜索"
					append-inner-icon="mdi-magnify"
					v-on:focus="onFocused"
					v-on:blur="onBlur"
				></v-text-field>
			</v-responsive>
			
		</v-container>
	</v-app-bar>
</template>

<script setup>
	import logo from '@/assets/logo.svg'
	import { ref } from 'vue'

	const links = [
		'首页'
	]
	
	const dynamicSearchWidth = ref(300);

	const onFocused = function(e){
		// dynamicSearchWidth.value = 2000;
	}
	const onBlur = function(e){
		// dynamicSearchWidth.value = 200;
	}
</script>

<style scoped lang="scss">
._navbar{
	background-color: rgb(var(--v-theme-surface));
	& .logo{
		cursor: pointer;
		&:hover{
			background-color: rgb(var(--v-theme-hoverBackgroundColor));
		}
	}
}
</style>