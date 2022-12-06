<template>
    <section id="mid-green">
        <div class="container">
            <div class="col">
                <h3>WE HELP TO DELIVER THE BUSINESS CASE</h3>
            </div>
            <div class="col">
                <p>
                    When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown
                </p>
            </div>
            <button class="btn">GET STARTED</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    max-height: 30%;
    padding: 112px;
    background-color: var(--green);
    position: relative;
    display: flex;
    align-items: center;
}

.container {
    display: flex;
    align-items: center;
}

.col {
    width: 50%;
    h3 {
        width: 50%;
    }
    h3, p {
        margin-left: 120px;
    }
}

.btn {
    background-color: var(--red);
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>