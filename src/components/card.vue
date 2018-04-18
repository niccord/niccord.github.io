<template>
    <div class="card" :title="tech.info">
        <div class="title">{{tech.name}}</div>
        <div class="rate">{{stars}}</div>
        <div class="subtitle" v-html="tech.title"></div>
        <div v-if="tech.tags" class="tags">
            <span class="tag" v-for="tag in tech.tags" :key="tag">{{tag}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'tech'
    ],
    computed: {
        stars() {
            let starstring = '';
            for (let index = 0; index < 5; index++) { // ☆ ★
                starstring += (index < this.tech.rate) ? '★' : '☆'
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
        max-width: 300px;
        min-width: 160px;
        display: flex;
        flex-direction: column;
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
        flex-wrap: wrap;
    }

    .tag {
        flex: 1;
        background-color: lightblue;
        border-radius: 5px;
        margin: 3px;
        padding: 3px;
    }

    .subtitle {
        flex-grow: 1;
    }

</style>
