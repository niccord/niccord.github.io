<template>
    <div>
        <h1 class="pagetitle">Nicola Cordioli</h1>
        <h1>Senior fullstack web developer</h1>
        <h2>What do I know?</h2>
        <h2>Do I know things??</h2>
        <h2>Let's find out!</h2>
        <br>
        <br>
        <br>
        <h1 class="pagetitle">Hot</h1>
        <div class="hot">
        <app-card v-for="i in 4"></app-card>
        </div>
    </div>
</template>

<script>
import appCard from './card.vue'

export default {
    components: {
        appCard
    }
}
</script>


<style>
    .hot {
        display: flex
    }
</style>
