<template>
    <section>
        <div class="container">
            <div id="policy">
                <span>Terms of use</span>
                <span>Privacy Environmental Policy</span>
            </div>
            <span>Copyright @ 2020 Phlox Consulting. All Rights Reserved.</span>
            <button>↑</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 3rem 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

#policy {
    display: flex;
    flex-direction: column;
}

button {
    position: absolute;
    bottom: 0;
    right: -30px;
}
</style>