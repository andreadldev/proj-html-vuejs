<template>
    <section id="about-us">
        <div class="container">
            <div class="block">
                <span>ABOUT US</span>
                <h2>WE MAKE YOUR STRATEGY WORK</h2>
                <p>
                    When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when i hear the buzz of the little world among the stalks, and grow familiar indescribable forms of the insects and flies, then i feel the presence of the Almighty.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 272px 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url('../css/img/section-2.jpg');
    background-repeat: no-repeat;
    background-position: left 0;
    background-size: 65% 1;
    color: white;
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

.container {
    display: flex;
    justify-content: flex-end;
}

.block {
    width: 35%;
    * {
        display: block;
        margin: 0.9rem 0;
    }
}
</style>