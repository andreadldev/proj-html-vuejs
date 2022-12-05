<template>
    <section class="debug">
        <div class="container">
            <div class="block">
                <span>ALWAYS THE BEST WAY YOU NEED IT</span>
                <h1>THE BEST BUSINESS CONSULTING</h1>
                <button class="btn">READ MORE</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.debug {
    .block {
        border: 1px solid yellow;
    }
}

.btn {
    background-color: var(--green);
}

section {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 0;
    background-image: url('../css/img/hero.jpg');
    background-repeat: no-repeat;
    background-position: right 0;
    background-size: 65% 1;
}

section:before {
    content: '';
    display: block;
    height: 100%;
    width: calc(100% - 1200px);
    min-width: 35vw;
    z-index: -10;
    position: absolute;
}

.block {
    width: 50%;
    * {
        display: inline-block;
        margin: 0.9rem 0;
    }
}
</style>