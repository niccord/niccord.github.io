<template>
    <div class="card" :title="title">
        <div class="title">{{name}}</div>
        <div class="rate">{{stars}}</div>
    </div>
</template>

<script>
export default {
    props: [
        'name', 'rate', 'title'
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
        font-size: 150%;
        font-weight: bold;
        padding: 10px 5px 20px 5px;
    }

</style>
