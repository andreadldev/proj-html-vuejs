<script>
import sectionOne from './main-section-1.vue';
import sectionTwo from './main-section-2.vue';
import sectionThree from './main-section-3.vue';

export default {
    components: {
        sectionOne,
        sectionTwo,
        sectionThree
    }
}
</script>

<template>
    <main>
        <sectionOne/>
        <sectionTwo/>
        <sectionThree/>
    </main>
</template>

<style lang="scss" scoped>
</style>