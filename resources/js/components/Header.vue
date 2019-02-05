<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">Vue App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
            <template v-if="!currentUser">
                <li>
                    <router-link to="/login"    class="nav-link">Login</router-link>
                </li>
                <li>
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
            </template>
            <template v-else>
                <li>
                    <router-link to="/customers" class="nav-link">Customers</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ currentUser.name }} <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#!" @click.prevent="logout">Logout</a>
                    </div>
                </li>
            </template>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name : "app-header",
    methods : {
        logout() {
            this.$store.commit('logout')
            this.$router.push('/login')
        }
    },
    computed : {
        currentUser() {
            return this.$store.getters.currentUser
        }
    }
};
</script>

<style>
</style>
