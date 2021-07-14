<template>
    <div id="simulator">
    <Pixel4/>
    </div>
</template>

<script>
import Pixel4 from '../components/Pixel4.vue'
export default {
    name: 'Simulator',
    components:{
        Pixel4
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
#simulator {
    width: 20vw;
    height: 100%;
    background-color: #333;
    margin-left: 0;
}
</style>