<template>
    <section>
        <div class="container">
            <div class="block">
                <span>ALWAYS THE BEST WAY YOU NEED IT</span>
                <h1>THE BEST BUSINESS CONSULTING</h1>
                <button class="btn">READ MORE</button>
                <div class="btn-rounded">
                    <font-awesome-icon icon="fa-solid fa-play" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    max-height: 100vh;
    padding: 265px 0;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 0;
    background-image: url('../css/img/hero.jpg');
    background-repeat: no-repeat;
    background-position: right 0;
    background-size: 65% 1;

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: calc(100% - 1200px);
        min-width: 35vw;
        z-index: -10;
        position: absolute;
    }
}

.block {
    width: 50%;
    position: relative;
    * {
        display: inline-block;
        margin: 0.9rem 0;
    }

    .btn {
    background-color: var(--green);
    }

    .btn-rounded {
        background-color: inherit;
        color: var(--green);
        border: 2px solid white;
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 220px;
    }

    span {
        position: relative;
        left: 60px;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 6px;
            left: -60px;
            width: 45px;
            height: 3px;
            background-color: var(--green);
        }
    }
}

</style>