<template>
    <section>
        <div class="container">
            <span>PROJECT</span>
            <h3>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h3>
            <div class="row">
                <div class="card">
                    <img src="../css/img/card1.jpg" alt="...">  
                </div>
                <div class="card">
                    <img src="../css/img/card2.jpg" alt="..."> 
                </div>
                <div class="card">
                    <img src="../css/img/card3.jpg" alt="..."> 
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 10rem 0;
    color: white;
    display: flex;
    align-items: center;
}

.row {
    display: flex;
    justify-content: space-between;
}

.card {
    width: calc(100% / 3 - 15px);
    margin-top: 1.25rem;
    margin-bottom: 1.875rem;
}

h3 {
    width: 40%;
}

img {
    width: 100%;
}
</style>