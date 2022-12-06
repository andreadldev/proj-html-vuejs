<script>
export default {
    props: {
        item: String
    }
}
</script>

<template>
    <li>{{item}}</li>
</template>

<style lang="scss">
header, footer {
    li {
        position: relative;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:hover {
            color: white;
        }

        &:hover:before {
            content: '';
            display: block;
            height: 5px;
            width: 20px;
            background-color: white;
            position: absolute;
            top: -21px;
        }
    }
}
</style>