<script>
import AppHeader from './components/Header.vue';
import AppMain from './components/Main.vue';

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <AppHeader msg='Hello World' />
    <AppMain/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
