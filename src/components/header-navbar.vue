<template>
    <nav class="debug">
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
.debug {
    border: 2px solid orange;
}

nav {
    padding: 1.25rem 0;
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