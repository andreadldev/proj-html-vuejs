<script>
export default {
    data() {
        return {
            list: [
                {
                    title: 'STATISTICAL CONSULTING',
                    description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees.',
                    icon: 'src/css/img/small-icon-1.png'
                },
                {
                    title: 'DIGITAL CONSULTING',
                    description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees.',
                    icon: 'src/css/img/small-icon-2.png'
                },
                {
                    title: 'BANKING CONSULTING',
                    description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees.',
                    icon: 'src/css/img/small-icon-3.png'
                },
                {
                    title: 'ENTERPRISE CONSULTING',
                    description: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees.',
                    icon: 'src/css/img/small-icon-4.png'
                }
            ]
        }
    }
}
</script>

<template>
    <section id="consultants">
        <div class="container">
            <h3>OUR CONSULTANTS CAN HELP YOU</h3>
                <div class="row">
                    <div class="col" v-for="col in this.list">
                        <h4>{{col.title}}</h4>
                        <p>{{col.description}}</p>
                        <img :src=col.icon alt="...">
                    </div>
                </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: white;
    padding-top: 96px;
    padding-bottom: 160px;
    overflow: hidden;
}

.container {
    width: 70%;
    padding: 0 6.25rem;

}

h3, h4 {
    padding-bottom: 1rem;
    position: relative;
}

h3:after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--green);
    position: absolute;
    top: 18px;
    left: 50%;
}

.row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-left: 6rem;
}

.col {
    width: 50%;
    padding: 5rem 6.25rem;
    position: relative;
    img {
        position: absolute;
        top: 62px;
        left: 0;
    }
}
</style>