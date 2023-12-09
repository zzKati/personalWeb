<script setup>
import { webThemeStore } from '../stores/Theme'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {onMounted} from 'vue'
gsap.registerPlugin(ScrollTrigger)
const webTheme = webThemeStore()
onMounted(() => {
    gsap.from('.about-left', {
        duration: 1,
        x: '-=50%',
        opacity: 0,
        ease: 'back.out',
        scrollTrigger: {
            trigger: '.about-wrapper',
            toggleActions: 'play reverse play reverse',
            start: "top 70%",
            end: "bottom 50%",
        }
    })
    gsap.from('.about-right', {
        duration: 1,
        x: '+=50%',
        opacity: 0,
        ease: 'back.out',
        scrollTrigger: {
            trigger: '.about-wrapper',
            toggleActions: 'play reverse play reverse',
            start: "top 70%",
            end: "bottom 50%",
        }
    })
})
</script>

<template>
    <div class="about-wrapper" :class="{'about-wrapper-dark':webTheme.isDark}" id="about">
        <div class="about-content">
            <div class="about-left">
                <img src="../assets/about.jpg">
            </div>
            <div class="about-right">
                <div class="about-title">About Me</div>
                <div class="about-subtitle" :class="{'about-subtitle-dark':webTheme.isDark}">I Design and Develop</div>
                <div class="about-subtitle" :class="{ 'about-subtitle-dark': webTheme.isDark }">Experiences that make</div>
                <div class="about-subtitle" :class="{ 'about-subtitle-dark': webTheme.isDark }">people's live simple.</div>
                <div class="about-description" :class="{'about-description-dark':webTheme.isDark}">
                    Websites are an indispensable part of contemporary
                    <br>
                    netizens,building bridges for people to obtain 
                    <br>
                    information, so websites can improve people's lives.
                </div>
                <a href="https://developer.mozilla.org/zh-CN/docs/Learn/Front-end_web_developer" class="about-button">
                    <font-awesome-icon :icon="['far', 'newspaper']" />
                    <span>Learn More</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.about-wrapper {
    transition: all .5s;
    width: 100%;
    height: 660px;
    box-sizing: border-box;
    overflow: hidden;
    .about-content {
        width: 1000px;
        margin: 0 auto; 
        padding-top:50px;
        display: flex;
        .about-left{
            width: 400px;
            height: 400px;
            min-width: 300px;
            min-height: 300px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0px 5px 5px 0px rgba(0,0,0,.5);
            img{
                width: 400px;
                min-width: 300px;
            }
        }
        .about-right{
            margin-top: 50px;
            margin-left: 100px;
            font-size: 18px;
            .about-title{
                font-weight: 700;
                color: rgb(122,73,254);
            }

            .about-subtitle{
                color:rgb(63,57,109);
                font-size: clamp(27px,35px,35px);
                font-weight: 700;
                margin-top: 6px;
            }

            .about-subtitle-dark{
                color: white;
            }
            .about-description{
                margin-top: 20px;
                color:rgba(0, 0, 0, .7);
                font-size: 16px;
            }

            .about-description-dark{
                color: rgb(178, 181, 194);
            }
            .about-button{
                transition: all .5s;
                display: block;
                margin-top: 10px;
                box-sizing: border-box;
                padding: 10px;
                width: 160px;
                height: 60px;
                line-height: 40px;
                background-color: rgb(122,73,254);
                border-radius: 10px;
                svg{
                    color: white;
                    margin: 0 10px;
                }
                span{
                    color: white;
                }
            }

            .about-button:hover{
                background-color: rgb(112,22,255);
            }
        }
    }

}

.about-wrapper-dark{
    background-color: rgb(33,39,54);
}

@media screen and (max-width: 1200px) {

    .about-wrapper{
        .about-content{
        width: 90vw;
    }

    }

}

@media screen  and (max-width:1000px) {
    .about-wrapper{
        .about-content{
            .about-left{
                width: 40vw;
                height: 40vw;
                img{
                    width: 40vw;
                }
            }
            .about-right{
                margin-top: 0;
                .about-subtitle{
                    font-size: 3.8vw;
                }
            }
        }
    }
}

@media screen and (max-width:760px){
    .about-wrapper{
        height: 860px;
        // margin-bottom: 100px;
        .about-content{
            flex-direction: column-reverse;
            .about-left{
                margin: 0 auto;
            }
            .about-right{
                margin: 0 auto;
                text-align: center;
                .about-description{
                    margin-bottom: 20px;
                }
                .about-button{
                    margin: 0 auto;
                    margin-bottom: 100px;
                }

                .about-subtitle{
                    font-size: 6vw;
                }
            }
        }
    }
}
</style>