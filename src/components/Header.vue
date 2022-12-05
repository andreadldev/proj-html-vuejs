<script>
import appNavbar from './header-navbar.vue';

export default {
    components: {
        appNavbar
    },
    props: {
        msg: String
    }
}
</script>

<template>
    <header>
        <appNavbar/>
        <h1>{{ msg }}</h1>
    </header>
</template>

<style lang="scss" scoped>
</style>
