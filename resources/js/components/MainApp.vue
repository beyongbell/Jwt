<template>
    <div id="main">
        <Header/>
        <main role="main" class="container">
            <div class="content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
       name: "main-app",
       components : {Header}
    }
</script>
