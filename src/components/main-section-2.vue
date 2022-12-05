<template>
    <section class="debug">
        <div class="container">
            <div class="block">
                <span>ABOUT US</span>
                <h2>WE MAKE YOUR STRATEGY WORK</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa at voluptatum, quisquam excepturi tempore vero magnam iste similique dignissimos deserunt, eveniet exercitationem temporibus totam iusto? Earum officiis sapiente explicabo recusandae.
                </p>
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

section {
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url('../css/img/section-2.jpg');
    background-repeat: no-repeat;
    background-position: left 0;
    background-size: 65% 1;
    
    background-color: var(--background);
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