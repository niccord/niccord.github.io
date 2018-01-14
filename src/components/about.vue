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
            <app-card v-for="i in hot" :tech="i"></app-card>
        </div>
        <h1 class="pagetitle">Others</h1>
        <div class="searchbar">
            <input type="text" v-model.trim="search" name="search" id="search" title="Search" placeholder="Search" >
        </div>
        <div class="others">
            <app-card v-if="search == ''" v-for="i in others" :tech="i"></app-card>
            <app-card v-if="search != ''" v-for="i in searchResults" :tech="i"></app-card>
        </div>
    </div>
</template>

<script>
import appCard from './card.vue'

export default {
    data() {
        return {
            hot: [
                { name: 'Javascript', rate: 5, title: 'Deep knoledge of almost every aspect of the language', info:'take a look at the source on my public repository on github, just to be sure', tags: ['vanilla', 'angular.js', 'Vue.js', 'ES6', 'Promises']},
                { name: 'C#', rate: 5, title: 'Used for many years in a real world project in my very first work for a company', info: 'Lambda functions ftw!', tags: ['Client - Server', 'Web applications']},
                { name: 'Java', rate: 5, title: 'Used for years and years', info: 'I learned programming in Java many many years ago', tags: ['SpringMVC', 'Hibernate']},
                { name: 'SQL', rate: 5, title: 'Used and studied a lot from simple queries to stored procedures always with an eye on performance', info: 'Someone said CLR stored procedures?', tags: ['SQLServer', 'Oracle', 'MySql']}
            ],
            others: [
                { name: 'CSS', rate: 3, title: 'Still learning a lot', info: 'Not my primary job, but I can do a thing or two :)', tags: ['CSS3', 'Animations', 'Flexbox']},
                { name: 'GIT', rate: 4, title: 'I know how to use it and how to solve problems when they happens. I were the "git guy" at some point of my life', info: '"Delete your folder and clone it again" wasn\'t my first idea, too!', tags: ['Git from command line', 'Sourcetree']},
                { name: 'Algorithms and Data Structures', rate: 4, title: 'Studied at university in a very deep way', info: 'It\'s a tough job, but someone has to do it', tags: ['Complexity', 'Efficiency']},
                { name: 'Node.js and npm', rate: 4, title: 'Used both of them a lot for work and sideprojects, also to manage libraries', info: 'npm install auto-write-website-info --save-dev', tags: ['Express', 'npm install', 'Sails.js', 'gunDB', 'package.json']},
                { name: 'VueJS', rate: 4, title: 'I\'ve recently completed <a target="blank" href="https://www.udemy.com/certificate/UC-WESI14A5/">this course</a> on Udemy. And, this website is build in VueJS!', info: 'vue init webpack-simple selfCreatedNewShinyPersonalWebsite', tags: ['Vuex', 'Vue Router', 'vue-cli', 'vue-resource', 'authentication', 'firebase', 'axios', 'vuelidate']},
                
            ],
            searchResults: [
                { name: 'TODO', rate: 1, title: 'I haven\'t implemented this feature, yet :(', info: 'Soon, promise', tags: ['//TODO', 'Set-reminder', 'Set-alarm-at-5-am']},
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
