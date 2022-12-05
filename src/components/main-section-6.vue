<template>
    <section>
        <div class="container">
            <span>BLOG</span>
            <h3>THE RECENT NEWS YOU MUST READ IT</h3>
            <div class="row">
                <div class="card">
                    <img src="../css/img/card4.jpg" alt="...">  
                    <div class="info">
                        <span>july 4, 2019 by paul</span>
                        <h4>Canadian Consulting Firm acquired by UK Giant</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis quae, suscipit a quisquam exercitationem quo temporibus architecto modi aliquam magnam fugit molestiae consequatur veniam vero possimus! Repellendus, eligendi iure.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../css/img/card5.jpg" alt="..."> 
                    <div class="info">
                        <span>july 4, 2019 by paul</span>
                        <h4>Canadian Consulting Firm acquired by UK Giant</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis quae, suscipit a quisquam exercitationem quo temporibus architecto modi aliquam magnam fugit molestiae consequatur veniam vero possimus! Repellendus, eligendi iure.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    min-height: 80%;
    background-color: var(--background);
    color: white;
    display: flex;
    align-items: center;
}

.row {
    display: flex;
    justify-content: space-between;
}

.card {
    width: calc(100% / 2 - 15px);
    margin-top: 1.25rem;
    margin-bottom: 1.875rem;
    position: relative;
}

.info {
    background-color: white;
    color: black;
    width: 75%;
    padding: 50px;
    position: absolute;
    right: 0;
    bottom: -75px;
}

img {
    width: 100%;
}
</style>