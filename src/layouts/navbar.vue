<template>
	<v-app-bar flat>
		<v-container class="mx-auto d-flex align-center justify-center _navbar"
		
		>
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
				:prepend-icon="link.icon ?? ''"
				:to="link.path"
				:text="link.name"
				variant="text"
				class="d-none d-sm-flex"
				size="large"
			></v-btn>
	
			<v-spacer></v-spacer>
			
			<v-responsive :max-width="300">
				<v-text-field
					class="d-none d-sm-block"
					density="compact"
					variant="solo-filled"
					flat
					hide-details
					placeholder="搜索"
					append-inner-icon="mdi-magnify"
					height="100%"
				></v-text-field>
			</v-responsive>
			
			<div class="user ml-8 d-none d-sm-block">
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
			<!-- if the screen is small, show the menu button -->
			<v-btn icon class="d-sm-none" @click="drawer = !drawer">
				<v-icon icon="mdi-menu"></v-icon>
			</v-btn>
		</v-container>
	</v-app-bar>
	<!-- right drawer -->
	<v-navigation-drawer v-model="drawer" location="right" temporary>
		
		<template v-slot:prepend>
			<v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" subtitle="Logged in"
				title="Jane Smith"></v-list-item>
		</template>
	
		<v-divider></v-divider>
		<v-text-field
			density="compact"
			variant="solo-filled"
			flat
			hide-details
			placeholder="搜索"
			append-inner-icon="mdi-magnify"
			height="100%"
		></v-text-field>
		<v-list density="compact" nav>
			<v-list-item
				v-for="(item,index) in links"
				:prepend-icon="item.icon"
				:title="item.name"
				:value="item.path.name"
			></v-list-item>
		</v-list>
		<template v-slot:append>
			<v-card-item class="pa-2" width="100%">
				<v-btn width="100%" flat prepend-icon="mdi-logout" color="error" @click="userLogout">
					退出登录
				</v-btn>
			</v-card-item>
		</template>
	</v-navigation-drawer>
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
			// icon: 'mdi-home',
			path: { name: 'home' }
		},
		{
			name: '登录',
			icon: 'mdi-home',
			path: { name: 'user.login' }
		}
	]

	const users = ref([]),
		  isLogined = ref(false),
		  drawer = ref(false),
		  overlay = ref(false);

	isLogined.value = localStorage.getItem('isLogined',true);

	const userLogout = function () {
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
	}

	if(isLogined.value){
		users.value = [
			{
				name: "个人中心",
				path: { name: 'user.home' , params: { userId: 1}},
				icon: "mdi-home"
			},
			{
				name: "创作中心",
				path: { name: 'user.login' },
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
				click: userLogout,
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