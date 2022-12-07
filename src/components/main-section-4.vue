<script>
export default {
    data() {
        return {
            images: ['src/css/img/card1.jpg', 'src/css/img/card2.jpg', 'src/css/img/card3.jpg']
        }
    }
}
</script>

<template>
    <section id="project">
        <div class="container">
            <span class="custom">PROJECT</span>
            <header>
                <div>
                    <h3>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h3>
                </div>
                <div class="btn-group">
                    <button>←</button>
                    <button>→</button>
                </div>
            </header>
            <div class="row">
                <div class="card" v-for="(card,index) in 3">
                    <img :src=this.images[index] alt="...">
                    <div class="card-info">
                        <div>
                            <span>Purinky Products</span>
                            <small>uncategorized</small>
                        </div>
                        <button>+</button>
                    </div>
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

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5rem;
    }

    .btn-group *, .card-info button {
        background-color: #36354c;
        border: none;
        color: white;
        padding: 12.5px 15px;
        margin-left: 7px;
        cursor: pointer;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card {
        display: block;
        width: calc(100% / 3 - 10px);
        margin-top: 1.25rem;
        margin-bottom: 1.875rem;
        position: relative;
        cursor: pointer;
        
        .card-info {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding: 40px;
            position: absolute;
            bottom: 0;
            pointer-events: none;
            div * {
                display: block;
            }
            div span {
                color: white;
                text-shadow: 1px 1px 1px black;
                left: 0;
            }
            div small {
                color: lightgray;
                text-shadow: 1px 1px 1px black;
            }
        }
        img {
            width: 100%;
            display: block;
            border: 3px solid transparent;
            &:hover {
                filter: grayscale(100%) brightness(35%) sepia(100%) hue-rotate(-50deg) saturate(700%) contrast(0.8);
                border: 3px solid darkslateblue;
            }
        }
    }
}

</style>