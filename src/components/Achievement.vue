<script setup>
import { gsap } from 'gsap'
import { reactive, onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/all'
import { webThemeStore } from '../stores/Theme'
gsap.registerPlugin(ScrollTrigger)
const webTheme = webThemeStore()
const numberArray = reactive([0, 0, 0, 0])
const numberIncreament = () => {
    for (let i = 0; i < numberArray.length; i++){
        numberArray[i] = 0
    }
    setTimeout(() => {
        let t = setInterval(() => {
            if (numberArray[0] >= 11) {
                clearInterval(t)
            }
            numberArray[0]++
            numberArray[1] += 12
            numberArray[2] += 5
            numberArray[3] += 8
        }, 50)
    },300)
}
onMounted(() => {
    gsap.from('.achievement-content', {
        duration: 1,
        ease: "back.out",
        opacity: 0,
        scale: 0.1,
        y: '+=200',
        onStart: numberIncreament,
        scrollTrigger: {
            trigger: '.achievement-wrapper',
            // markers: true,
            start: 'top 70%',
            end: '80% 30%',
            toggleActions:"play reverse play reverse"
        }
    })
})
</script>

<template>
    <div class="achievement-wrapper" :class="{'achievement-wrapper-dark':webTheme.isDark}" id="achievement">
        <div class="achievement-content">
            <div class="counter-item">
                <div class="counter-img">
                    <font-awesome-icon :icon="['far', 'user']" />
                </div>
                <div class="counter-number">{{ numberArray[0] }}</div>
                <div class="counter-description">Years Experience</div>
            </div>
            <div class="counter-item">
                <div class="counter-img">
                    <font-awesome-icon :icon="['fas', 'mug-hot']" />
                </div>
                <div class="counter-number">{{ numberArray[1] }}</div>
                <div class="counter-description">Cup Of Tea</div>
            </div>
            <div class="counter-item">
                <div class="counter-img">
                    <font-awesome-icon :icon="['fas', 'trophy']" />
                </div>
                <div class="counter-number">{{ numberArray[2] }}</div>
                <div class="counter-description">APEX Champion</div>
            </div>
            <div class="counter-item">
                <div class="counter-img">
                    <font-awesome-icon :icon="['fas', 'person-walking']" />
                </div>
                <div class="counter-number">{{ numberArray[3] }}</div>
                <div class="counter-description">ChuangGao Count</div>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped> 
    .achievement-wrapper{
        width: 100%;
        height: 455px;
        box-sizing: border-box;
        padding-top:120px ;
        transition: all .5s;
        background-color: white;
        overflow: hidden;
    }

    .achievement-wrapper-dark{
        background-color: rgb(33,39,54);
    }
    .achievement-content{
        width: 1100px;
        height: 215px;
        background-color:rgb(113,65,251);
        display: flex;
        margin: 0 auto;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
    }

    .counter-item{
        width: 230px;
        height: 115px;
        box-sizing: border-box;
    }
    .counter-img{
        width: 40px;
        height: 40px;
        margin: 0 auto;
        svg{
            width: 40px;
            height: 40px;
            color: white;
        }
    }

    .counter-number{
        text-align: center;
        font-size: 25px;
        color: white;
        padding: 15px 0;
    }
    .counter-description{
        color: white;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }

    .test{
        height: 200vh;
    }


@media screen and (max-width: 1200px) {

    .achievement-wrapper{
        .achievement-content{
        width:90vw;
    }

    }

}

@media screen and (max-width:1000px){
    .achievement-wrapper{
        height: 670px;
        .achievement-content{
            height: 430px;
            flex-wrap: wrap;
        }
        .counter-item{
            width: 50%;
        }
    }
}

@media screen and (max-width:500px) {
    .achievement-wrapper{
        height: 1100px;
        .achievement-content{
            height: 860px;
            flex-wrap: wrap;
        }
        .counter-item{
            width: 100%;
        }
    }
}
</style>