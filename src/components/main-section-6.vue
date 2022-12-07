<script>
export default {
    data() {
        return {
            images: ['src/css/img/card4.jpg', 'src/css/img/card5.jpg']
        }
    }
}
</script>

<template>
    <section id="blog">
        <div class="container">
            <div id="blog-title">
                <span>BLOG</span>
            </div>
            <header>
                <h3>THE RECENT NEWS YOU MUST READ IT</h3>
                <button class="btn">VIEW ALL</button>
            </header>
            <div class="row">
                <div class="card" v-for="card, index in 2">
                    <img :src=this.images[index] alt="...">  
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
    color: white;
    display: flex;
    align-items: center;
    padding: 12.5rem 0;
    
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 25px;
        .btn {
            background-color: var(--green);
        }
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
        img {
            width: 100%;
        }
        .info {
            background-color: white;
            color: black;
            width: 75%;
            padding: 50px;
            position: absolute;
            right: 0;
            bottom: -75px;

            span {
                color: red;
                left: 0;
                &:before {
                    display: none;
                }
            }
        }
    }
}


</style>