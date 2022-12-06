<script>
import appNavbar from './header-navbar.vue';
import appHero from './header-hero.vue';

export default {
    components: {
        appNavbar,
        appHero
    }
}
</script>

<template>
    <header>
        <appNavbar/>
        <appHero/>
    </header>
</template>