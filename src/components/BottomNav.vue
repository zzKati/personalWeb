<script setup>

</script>

<template>
    <div class="bottom-wrapper">
        <div class="bottom-content">
            <div class="bottom-title">Kat</div>
            <div class="bottom-nav">
                <div class="nav">
                    <a href="#home">Home</a>
                </div>
                <div class="nav">
                    <a href="#about">About</a>
                </div>
                <div class="nav">
                    <a href="#skills">Skills</a>
                </div>
                <div class="nav">
                    <a href="#achievement">Achieve</a>
                </div>
                <div class="nav">
                    <a href="#plan">Plan</a>
                </div>
                <div class="nav">
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div class="bottom-follow">
                <a href="https://space.bilibili.com/567489255?spm_id_from=333.1007.0.0">
                    <font-awesome-icon :icon="['fab', 'bilibili']" />
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.bottom-wrapper {
    width: 100%;
    height: 400px;
    background-color: rgb(29, 34, 48);
    box-sizing: border-box;
    overflow: hidden;
}

.bottom-content {
    width: 1100px;
    height: 150px;
    padding-top: 100px;
    margin: 0 auto;
}

.bottom-title {
    font-size: 24px;
    color: white;
    text-align: center;
    font-weight: 700;
    margin-bottom: 50px;
}

.bottom-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.nav {
    margin-right: 10px;
    a{
        transition: all .5s;
        color: white;
    }
}

.nav:hover{
    a{
        color: rgb(122, 73, 254);
    }
}

.bottom-follow {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(18, 22, 31);
    box-sizing: border-box;
    transition: all .5s;
    svg {
        width: 15px;
        height: 15px;
        padding: 17.5px;
        color: white;
    }
}

.bottom-follow:hover{
    background-color: rgb(122,73,254);
}

@media screen and (max-width: 1200px) {

    .bottom-wrapper{
        .bottom-content{
        width:90vw;
    }

    }

}
</style>