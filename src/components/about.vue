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
            <app-card v-for="i in hot" :name="i.name" :rate="i.rate" :title="i.title"></app-card>
        </div>
        <h1 class="pagetitle">Others</h1>
        <div class="searchbar">
            <input type="text" v-model.trim="search" name="search" id="search" title="Search" placeholder="Search" >
        </div>
        <div class="others">
            <app-card v-if="search == ''" v-for="i in others" :name="i.name" :rate="i.rate" :title="i.title"></app-card>
            <app-card v-if="search != ''" v-for="i in 15" :name="'n'" :rate="3" :title="'tt'"></app-card>
        </div>
    </div>
</template>

<script>
import appCard from './card.vue'

export default {
    data() {
        return {
            hot: [
                { name: 'Javascript', rate: 5, title: 'This is why'}
            ],
            others: [
                { name: 'CSS', rate: 3, title: 'Still learning a lot'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'},
                { name: 'C#', rate: 5, title: 'Lambda functions ftw!'}
            ],
            search: ''
        }
    },
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
