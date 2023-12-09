<script setup>
import { webThemeStore } from '../stores/Theme'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const webTheme = webThemeStore()
onMounted(() => {
    gsap.from('.home-left', {
        duration: 1,
        x: '-=50%',
        opacity: 0,
        ease: 'back.out',
        scrollTrigger: {
            trigger: '.home-wrapper',
            toggleActions: 'play reverse play reverse',
            start: "20% 20%",
            end:"bottom 50%"
        }
    })
    gsap.from('.home-right', {
        duration: 1,
        x: '+=50%',
        opacity: 0,
        ease: 'back.out',
        scrollTrigger: {
            trigger: '.home-wrapper',
            toggleActions: 'play reverse play reverse',
            start: "20% 20%",
            end: "bottom 50%"
        }
    })
})
</script>

<template>
    <div class="home-wrapper" :class="{ 'home-wrapper-dark': webTheme.isDark }" id="home">
        <div class="home-content">
            <div class="home-left">
                <div class="home-title" :class="{ 'home-title-dark': webTheme.isDark }">
                    <p>I Am Kat</p>
                    <p>Student &</p>
                    <p>Web Developer</p>
                </div>
                <div class="home-description" :class="{ 'home-description-dark': webTheme.isDark }">
                    I'm a web front-end developer newcomer.
                    <br>
                    If you are interested, you can contact me~
                </div>
                <div class="home-contact">
                    &nbsp;&nbsp;&nbsp;
                    <font-awesome-icon :icon="['far', 'envelope']" />
                    <span>Hire me</span>
                </div>
                <div class="home-follow">
                    <div class="follow-title" :class="{ 'home-follow-dark': webTheme.isDark }">Follow me</div>
                    <a :class="{'a-follow-dark':webTheme.isDark}"
                    href="https://space.bilibili.com/567489255?spm_id_from=333.1007.0.0">
                        <font-awesome-icon :icon="['fab', 'bilibili']" />
                    </a>
                </div>
            </div>
            <div class="home-right">
                <div class="img-wrapper">
                    <img src="../assets/home-1.png">
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="less" scoped>
.home-wrapper {
    width: 100%;
    height: 744px;
    padding-top: 150px;
    background-color: white;
    transition: all .5s;
    overflow: hidden;
    .home-content {
        width: 1100px;
        margin: 0 auto;
        // display: flex;
        padding-top: 144px;

        .home-left {
            float: left;

            .home-title {
                margin-bottom: 30px;

                p {
                    color: rgb(63, 57, 109);
                    font-size: clamp(3.2rem, 54px, 5.8rem);
                    font-weight: 700;
                }
            }

            .home-title-dark {
                p {
                    color: white;
                }
            }

            .home-description {
                color: rgba(0, 0, 0, .7);
                margin-bottom: 30px;
            }

            .home-description-dark {
                color: rgb(178, 181, 194);
            }

            .home-contact {
                transition: all .5s;
                margin-bottom: 30px;
                box-sizing: border-box;
                width: 150px;
                height: 60px;
                background-color: rgb(122, 73, 254);
                border-radius: 15px;
                line-height: 40px;
                padding: 10px;
                cursor: pointer;
                svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                    position: relative;
                    top: 2px;
                }

                span {
                    padding-left: 10px;
                    font-size: 20px;
                    color: white;
                }
            }

            .home-contact:hover{
                background-color: rgb(112,22,255);
            }

            .home-follow {
                display: flex;
                color: rgba(0, 0, 0, .7);
                height: 50px;
                line-height: 50px;
                width: 150px;

                a {
                    display: block;
                    width: 50px;
                    height: 50px;
                    background-color: rgb(235, 235, 235);
                    margin-left: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    transition: all .5s;

                    svg {
                        color: rgb(63, 57, 109);
                    }
                }

                a:hover{
                    background-color: rgb(122,73,254);
                    svg{
                        color: white;
                    }
                }

                .a-follow-dark {
                    background-color: rgb(29, 34, 48);

                    svg {
                        color: white;
                    }
                }
            }

            .home-follow-dark {
                color: rgb(178, 181, 194);
            }

        }

        .home-right {
            float: right;
            margin-right: 50px;

            .img-wrapper {
                width: 350px;
                min-width:300px;
                min-height: 342px;
                height: 400px;
                border-radius: 45%;
                position: relative;
                background: linear-gradient(120deg, rgb(138, 99, 250) 10%, rgb(119, 75, 246) 200%);
                overflow: hidden;

                img {
                    position: absolute;
                    bottom: 0;
                    width: 350px;
                    min-width:300px;
                    min-height: 300px;
                }
            }
        }
    }
}

.home-wrapper-dark {
    background-color: rgb(33, 39, 54);
}
@media screen and (max-width: 1200px) {

    .home-wrapper{
        .home-content{
        width:90vw;
    }

    }

}
@media screen and (max-width: 1000px) {
    .home-wrapper{
        .home-content{
            .home-left{
                .home-title{
                    p{
                        font-size: 5vw;
                    }
                }
            }
            .home-right{
                .img-wrapper{
                    width: 35vw;
                    height: 40vw;
                    img{
                        width: 35vw;
                    }
                }
            }
        }
    }

}

@media screen and (max-width: 760px){
    .home-wrapper{
        padding-top: 0px;
        height: 944px;
        .home-content{
            .home-left{
                float:none;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 20px;
                .home-contact{
                    margin: 0 auto;
                    margin-bottom: 30px;
                }
                .home-follow{
                    margin: 0 auto;
                }
                .home-title{
                    p{
                        font-size: 8vw;
                    }
                }
            }
            .home-right{
                float:none;
                margin-right:0px ;
                .img-wrapper{
                    margin: 0 auto;
                }
            }
        }
    }
}
</style>