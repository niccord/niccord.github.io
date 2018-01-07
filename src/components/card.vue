<template>
    <div class="card" :title="info">
        <div class="title">{{name}}</div>
        <div class="rate">{{stars}}</div>
        <div class="subtitle">{{title}}</div>
        <div v-if="tags" class="tags">
            <span class="tag" v-for="tag in tags">{{tag}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'name', 'rate', 'title', 'info', 'tags'
    ],
    computed: {
        stars() {
            let starstring = '';
            for (let index = 0; index < 5; index++) { // ☆ ★
                starstring += (index < this.rate) ? '★' : '☆'
            }
            return starstring
        }
    }
}
</script>


<style >
    .card {
        background-color: white;
        border-radius: 10px;
        margin: 15px;
        flex: 1;
        max-width: 200px;
    }
    .card > * {
        text-align: center;
        padding: 10px 5px 20px 5px;
    }

    .title, .rate {
        font-size: 150%;
        font-weight: bold;
    }

    .tags {
        display: flex;
        justify-content: center;
    }

    .tag {
        flex: 1;
        background-color: lightblue;
        border-radius: 5px;
        margin: 3px;
    }

</style>
