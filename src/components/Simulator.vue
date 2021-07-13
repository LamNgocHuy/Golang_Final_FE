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
    }
}
</script>

<style lang="scss" scoped>
#simulator {
    width: 20vw;
    height: 93vh;
    background-color: rgb(45, 190, 183);
    margin-left: 0;
}
</style>