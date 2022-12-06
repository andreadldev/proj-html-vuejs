<template>
    <nav>
        <div class="container">
            <img src="../css/img/logotype.png" alt="...">
            <ul class="list-inline">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>SERVICES</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    padding: 1.25rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    width: 6.25rem;
}
</style>