<template>
    <section>
        <div class="container">
            <div id="testimonial">
                <span>TESTIMONIAL</span>
            </div>
            <div id="title">
                <h3>WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h3>
            </div>
            <div class="row">
                <div class="card">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam culpa animi minima, voluptates sit rerum similique facilis vel explicabo provident quibusdam esse in nam tempora ad placeat exercitationem totam.</p>  
                    <h4>Vera Duncan</h4>
                    <span>Amazon Inc.</span>
                </div>
                <div class="card">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam culpa animi minima, voluptates sit rerum similique facilis vel explicabo provident quibusdam esse in nam tempora ad placeat exercitationem totam.</p>
                    <h4>Vera Duncan</h4>
                    <span>Amazon Inc.</span>
                </div>
                <div class="card">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam culpa animi minima, voluptates sit rerum similique facilis vel explicabo provident quibusdam esse in nam tempora ad placeat exercitationem totam.</p>
                    <h4>Vera Duncan</h4>
                    <span>Amazon Inc.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: var(--background);
    color: white;
    display: flex;
    align-items: center;
    padding-bottom: 80px;
}

#testimonial {
    display: flex;
    justify-content: center;
}

#title {
    display: flex;
    justify-content: flex-end;
    text-align: right;
}

h3 {
    width: 40%;
    margin: 1.875rem 0;
}

h4 {
    margin-top: 1.25rem;
}

.row {
    display: flex;
    justify-content: space-between;
    background-color: white;
    color: black;
}

.card {
    width: calc(100% / 3 - 15px);
    margin-top: 1.25rem;
    margin-bottom: 1.875rem;
}
</style>