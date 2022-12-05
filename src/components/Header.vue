<script>
import appNavbar from './header-navbar.vue';
import appHero from './header-hero.vue';

export default {
    components: {
        appNavbar,
        appHero
    },
    props: {
        msg: String
    }
}
</script>

<template>
    <header>
        <appNavbar/>
        <appHero/>
        <!-- <h1>{{ msg }}</h1> -->
    </header>
</template>

<style lang="scss" scoped>

header {
    background-color: var(--background);
}
</style>