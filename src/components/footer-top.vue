<script>
import { store } from '../js/store.js';
import menuItems from '../components/menuItems.vue'

export default {
    components: {
        menuItems
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="logo">
                <img src="../css/img/logotype-2-139x23.png" alt="...">
            </div>
            <nav>
                <ul class="list-inline">
                    <menuItems  v-for="(item,index) in store.menuItems" :key="index" :item="item"/>
                </ul>
            </nav>
            <div class="list-inline">
                <button>
                    1
                </button>

                <button>
                    2
                </button>

                <button>
                    3
                </button>
                
                <button>
                    4
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
}
</style>