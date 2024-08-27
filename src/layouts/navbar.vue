<template>
	<v-app-bar flat>
		<v-container class="mx-auto d-flex align-center justify-center _navbar">
			<div class="logo rounded pa-2 mr-4">
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
				:to="link.path"
				:text="link.name"
				variant="text"
			></v-btn>
	
			<v-spacer></v-spacer>
			
			<v-responsive :max-width="300">
				<v-text-field
					density="compact"
					variant="solo-filled"
					flat
					hide-details
					placeholder="搜索"
					append-inner-icon="mdi-magnify"
				></v-text-field>
			</v-responsive>
			
			<div class="user ml-8">
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-avatar 
							class="pointer"
							v-bind="props"
							:image="logo"
						></v-avatar>
					</template>
		
					<v-list 
					v-if="isLogined == true"
					class="d-flex flex-column align-center justify-center ga-1"
					>
						<v-btn
							v-for="(item,i) in users"
							flat
							append-icon="mdi-chevron-right"
							:prepend-icon="item.icon"
							:text="item.name"
							:to="item.path"
							@click="item.click"
						></v-btn>
					</v-list>
				</v-menu>
			</div>

		</v-container>
	</v-app-bar>
</template>

<script setup>
	import logo from '@/assets/logo.svg'
	import { getUserInfo,logout } from '@/api/user.js'
	import { ref } from 'vue'
	import { useRouter } from 'vue-router';
	import settings from '@/layouts/settings'
	import Swal from "sweetalert2";
	
    const router = useRouter();
	const links = [
		{
			name: '首页',
			path: { name: 'home' }
		},
		{
			name: '登录',
			path: { name: 'login' }
		}
	]

	const users = ref([]),
		  isLogined = ref(false),
		  overlay = ref(false);

	isLogined.value = localStorage.getItem('isLogined',true);

	if(isLogined.value){
		users.value = [
			{
				name: "个人中心",
				path: { name: 'user.home' , params: { userId: 1}},
				icon: "mdi-home"
			},
			{
				name: "创作中心",
				path: "/login",
				icon: "mdi-pencil-outline"
			},
			{
				name: "用户设置",
				path: "",
				icon: "mdi-cog",
				click: (e) => {
					overlay.value = true;
				}
			},
			{
				name: "退出登录",
				path: "",
				click: (e) => {
					logout().then((response) => {
						if( response.code!=2000 ){
							Swal.fire({
								position: "top-end",
								icon: "error",
								title: `${response.message}`,
								showConfirmButton: false,
								toast: true,
								timer: 1500
							});
							return false;
						};
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: `${response.message}`,
							showConfirmButton: false,
							toast: true,
							timer: 1500
						}).then(()=>{
							router.push({
								name: "login"
							})
						});
					}).catch((error) => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							title: `退出登录错误`,
							showConfirmButton: false,
							toast: true,
							timer: 1500
						});
					});
				},
				icon: "mdi-logout"
			}
		]
	};
	
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
	& .pointer{
		cursor: pointer;
	}
}
</style>