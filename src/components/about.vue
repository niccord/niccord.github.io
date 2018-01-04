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
            <app-card v-for="i in 5"></app-card>
        </div>
        <h1 class="pagetitle">Others</h1>
        <div class="searchbar">
            <input type="text" name="search" id="search" title="Search" placeholder="Search" >
        </div>
        <div class="others">
            <app-card v-for="i in 15"></app-card>
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
    .hot, .searchbar, .others {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .searchbar > input {
        background-color: white;
        border-radius: 10px;
        margin: 10px;
        padding: 8px;
        border-width: 0px;
        width: 350px;
    }

</style>
