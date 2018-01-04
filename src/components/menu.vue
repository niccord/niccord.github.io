<template>
    <div class="sidenav">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/workplaces">Experience</router-link></li>
            <li><router-link to="/studies">Studies</router-link></li>
            <li><router-link to="/other">Other</router-link></li>
        </ul>
    </div>
</template>

<style>
.sidenav {
    height: 100%;
    width: 225px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    padding-left: 25px;
}

.sidenav > ul > li {
    display: block;
    margin: 20px;
    font-size: 30px;
}
</style>
