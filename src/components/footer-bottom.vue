<script>
export default {
    methods: {
        scrollTop() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById('scrollToTop').style.display = "block";
            } else {
                document.getElementById('scrollToTop').style.display = "none";}
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (document.documentElement.scrollTop > 950) {
                document.getElementById('scrollTop').style.display = "block";
            } 
            else {
                document.getElementById('scrollTop').style.display = "none";}
        },
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div id="policy">
                <span>Terms of use</span>
                <span>Privacy Environmental Policy</span>
            </div>
            <span>Copyright @ 2020 Phlox Consulting. All Rights Reserved.</span>
            <button class="btn-rounded" id="scrollTop" @click="scrollToTop()">↑</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 3rem 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

#policy {
    display: flex;
    flex-direction: column;
}

button {
    position: fixed;
    bottom: 50px;
    right: 130px;
    box-shadow: 1px 1px 0.5px 1px black;
}

#scrollTop {
    border: none;
    background-color: white;
    color: black;
    display: none;
}
</style>