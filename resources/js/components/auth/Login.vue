<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email</label>
                            <input type="text" v-model="form.email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Login">
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error">{{ authError }}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from '../../helpers/auth.js'
export default {
    name: "login",
    data() {
        return {
            form : {
                email : null,
                password : null
            },
            error:null
        }
    },
    methods: {
        authenticate() {
            this.$store.dispatch('login')

            login(this.$data.form)
            .then((res) =>{
                this.$store.commit("loginSuccess", res)
                this.$router.push({path:'/'})
            })
            .catch((error) => {
                this.$store.commit("loginFaild", {error})
            })
        }
    },
    computed : {
        authError() {
            return this.$store.getters.authError;
        }
    }
}
</script>

<style>
.error {
    text-align: center;
    color: red;
}
</style>
