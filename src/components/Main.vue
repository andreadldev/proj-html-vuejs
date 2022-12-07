<script>
import sectionOne from './main-section-1.vue';
import sectionTwo from './main-section-2.vue';
import sectionThree from './main-section-3.vue';
import sectionFour from './main-section-4.vue';
import sectionFive from './main-section-5.vue';
import sectionSix from './main-section-6.vue';
import sectionPreFooter from './main-section-prefooter.vue';

export default {
    components: {
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        sectionFive,
        sectionSix,
        sectionPreFooter
    }
}
</script>

<template>
    <main>
        <!-- CONSULTANTS -->
        <sectionOne/>

        <!-- ABOUT US -->
        <sectionTwo/>

        <!-- MID GREEN SECTION -->
        <sectionThree/>

        <!-- PROJECT -->
        <sectionFour/>

        <!-- TESTIMONIAL -->
        <sectionFive/>

        <!-- BLOG -->
        <sectionSix/>

        <!-- PREFOOTER -->
        <sectionPreFooter/>
    </main>
</template>

<style lang="scss">
main {
    span {
    display: inline-block;
    position: relative;
    left: 60px;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 8px;
        left: -60px;
        width: 45px;
        height: 3px;
        background-color: var(--green);
    }
}
}
</style>