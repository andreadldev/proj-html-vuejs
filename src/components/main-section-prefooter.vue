<template>
    <section id="prefooter">
        <h2>LET'S TALK ABOUT WORK</h2>
        <p>
            A wonderful serenity has taken posession Far far away, behind the word mountains.
        </p>
        <button class="btn">GET STARTED</button>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 10rem 0;
    width: 100%;
    background-image: url('../css/img/prefooter.jpg');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    .btn {
        background-color: var(--background);
        color: white;
    }
}
</style>