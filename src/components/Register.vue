<template>
	<form>
		<v-text-field
			v-model="user"
			:rules="[rules.required]"
			label="ユーザー名"
		></v-text-field>
		<v-text-field
			v-model="email"
			:rules="[rules.required, rules.email]"
			label="メールアドレス"
		></v-text-field>
		
		<v-text-field
			:append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
			:rules="[rules.required, rules.min]"
			:type="show3 ? 'text' : 'password'"
			name="password"
			label="パスワード"
			class="input-group--focused"
			@click:append="show3 = !show3"
		></v-text-field>
		
		<v-btn
			class="mt-2"
			block 
			color="primary"
			@click="loader = 'loading'">
				ログイン
		</v-btn>
		
		<v-divider class="mt-5" ></v-divider>
		
		<v-btn
			class="mt-2"
			block
			color="primary"
			@click="loader = 'loading'">
			<v-icon left></v-icon>
			<div block>
				Twitterで登録
			</div>
		</v-btn>
		
	</form>
</template>

<script>
export default {
	data () {
		return {
			loader: null,
			loading: false,
			show3: false,
			rules: {
				required: value => !!value || 'Required.',
				counter: value => value.length <= 20 || 'Max 20 characters',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				}
			}
		}
	},
	watch: {
		loader () {
			const l = this.loader
			this[l] = !this[l]
				setTimeout(() => (this[l] = false), 3000)
				this.loader = null
		},
	},
}
</script>