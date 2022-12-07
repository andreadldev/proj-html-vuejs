<template>
    <section id="testimonial">
        <div class="container">
            <div id="testimonial-title">
                <span class="custom">TESTIMONIAL</span>
            </div>
            <div id="title">
                <h3>WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h3>
            </div>
            <div class="row">
                <div class="card" v-for="card in 3">
                    <p>
                        When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when i hear the buzz of the little
                    </p>  
                    <h4>Vera Duncan</h4>
                    <span>Amazon Inc.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    color: white;
    display: flex;
    align-items: center;

    #testimonial-title {
        text-align: center;
        span {
            width: 100%;
            left: 0;
            &:before {
                position: absolute;
                left: calc(100% - 45px);
                top: 14px;
            }
        }
    }
    #title {
        display: flex;
        justify-content: flex-end;
        text-align: right;
    }
    .row {
        display: flex;
        justify-content: space-between;
        background-color: white;
        color: black;
    }
    .card {
        width: calc(100% / 3 - 15px);
        margin-top: 2.5rem;
        margin-bottom: 3.125rem;
        padding: 0 2.5rem;
        span {
            margin-bottom: 1.25rem;
        }
    }
}
</style>