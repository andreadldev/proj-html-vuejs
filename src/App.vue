<script>
import AppHeader from './components/Header.vue';
import AppMain from './components/Main.vue';
import AppFooter from './components/Footer.vue';

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<template>
    <AppHeader msg='Hello World' />
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
