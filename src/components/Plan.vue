<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { webThemeStore } from '../stores/Theme'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const webTheme = webThemeStore()
onMounted(() => {
    gsap.from('.plan-left', {
        duration: 0.5,
        opacity: 0,
        ease: "power1.out",
        scale: 0.1,
        x: '-=300',
        scrollTrigger: {
            trigger: ".Plan-wrapper",
            start: '20% 70%',
            end: '70% 30%',
            // markers: true,
            toggleActions: "play reverse play reverse"
        }
    })
    gsap.from('.plan-right', {
        duration: 0.5,
        opacity: 0,
        ease: "power1.out",
        scale: 0.1,
        x: '+=300',
        scrollTrigger: {
            trigger: ".Plan-wrapper",
            start: '20% 70%',
            end: '70% 30%',
            // markers: true,
            toggleActions: "play reverse play reverse"
        }
    })
})

</script>


<template>
    <div class="Plan-wrapper" :class="{ 'play-wrapper-dark': webTheme.isDark }" id="plan">
        <div class="Plan-content">
            <div class="plan-left">
                <div class="plan-subtitle">
                    My Plan
                </div>
                <div class="plan-title" :class="{ 'plan-title-dark': webTheme.isDark }">
                    What I'm Going To
                    <br>
                    Do In The Future
                </div>
                <div class="plan-desciption" :class="{ 'plan-description-dark': webTheme.isDark }">
                    In future front-end development, responsive design,
                    componentization, performance optimization,
                    and emerging technologies will all play a key role.
                    <br>
                    <br>
                    As a front-end developer, continuous learning and
                    keeping an eye on industry trends will be integral
                    to be able to build modern, efficient, and user-friendly websites.
                </div>
            </div>
            <div class="plan-right">
                <div class="plan-card" :class="{ 'plan-card-dark': webTheme.isDark }">
                    <div class="card-logo">
                        <img src="../assets/react-logo.svg">
                    </div>
                    <div class="card-description">
                        <div class="title-description" :class="{ 'title-description-dark': webTheme.isDark }">React</div>
                        <div class="content-description">An efficient, flexible, component-driven framework.</div>
                    </div>
                </div>
                <div class="plan-card" :class="{ 'plan-card-dark': webTheme.isDark }">
                    <div class="card-logo">
                        <img src="../assets/Typescript_logo.svg">
                    </div>
                    <div class="card-description">
                        <div class="title-description" :class="{ 'title-description-dark': webTheme.isDark }">Typescript
                        </div>
                        <div class="content-description">Type-safe JavaScript superset language.</div>
                    </div>
                </div>
                <div class="plan-card" :class="{ 'plan-card-dark': webTheme.isDark }">
                    <div class="card-logo">
                        <font-awesome-icon :icon="['fas', 'tablet-screen-button']" />
                    </div>
                    <div class="card-description">
                        <div class="title-description" :class="{ 'title-description-dark': webTheme.isDark }">Mobile
                            development</div>
                        <div class="content-description">A responsive, smooth, user-friendly mobile experience.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.Plan-wrapper {
    width: 100%;
    height: 750px;
    box-sizing: border-box;
    background-color: rgb(246, 248, 254);
    overflow: hidden;
    transition: all .5s
}

.play-wrapper-dark {
    background-color: rgb(29, 34, 48);
}

.Plan-content {
    width: 1100px;
    margin: 0 auto;
}

.plan-left {
    float: left;
    width: 500px;
    margin-top: 175px;
}

.plan-subtitle {
    font-size: 18px;
    font-weight: 600;
    color: rgb(112, 22, 255);
}

.plan-title {
    font-size: 42px;
    font-weight: 700;
    color: rgb(63, 57, 109);
}

.plan-title-dark {
    color: white;
}

.plan-desciption {
    color: rgba(0, 0, 0, .7);
}

.plan-description-dark {
    color: #b8bbc7;
}

.plan-right {
    float: right;
    margin-top: 125px;
}

.plan-card {
    transition: all .5s;
    width: 500px;
    height: 120px;
    box-sizing: border-box;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 0 0 85px 0 #e9eefc;
    border-radius: 10px;
    display: flex;
}

.plan-card-dark {
    background-color: rgb(33, 39, 54);
    box-shadow: none;

    .content-description {
        color: #b8bbc7;
    }
}

.plan-card:nth-child(2) {
    margin-left: 30px;
}

.plan-card:hover {
    box-shadow: 0px 30px 60px 2px rgba(0, 0, 0, 0.1);
}

.plan-card:hover .card-logo {
    transform: rotateY(360deg);
}

.card-logo {
    transition: all .5s;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    padding: 17.5px;
    background-color: rgb(246, 248, 254);

    img {
        width: 25px;
        height: 25px;
    }

    svg {
        width: 25px;
        height: 25px;
        color: rgb(49, 120, 198);
    }
}

.card-description {
    width: 375px;
}

.title-description {
    margin-top: 30px;
    color: rgb(63, 57, 109);
    font-size: 18px;
    font-weight: 700;
}

.title-description-dark {
    color: white;
}

.content-description {
    margin-top: 10px;
    color: rgba(0, 0, 0, .7);
}

@media screen and (max-width: 1200px) {

    .Plan-wrapper {
        .Plan-content {
            width: 90vw;


        }

    }

    .plan-left {
        width: 40vw;
    }

    .plan-card {
        width: 40vw;
    }
}

@media screen and (max-width: 1000px) {
    .Plan-wrapper {
        height: 1100px;

        .Plan-content {
            .plan-left {
                width: 500px;
                float: none;
                margin: 0 auto;
                margin-top: 175px;
                text-align: center;;
            }

            .plan-card {
                width: 500px;
                margin: 0 auto;
                margin-bottom: 20px;
            }

        }
    }

    .plan-right {
        float: none;
    }


}

@media screen and (max-width:560px) {
    .plan-title {
        font-size: 6vw;
    }

    .Plan-wrapper {
        .Plan-content {
            .plan-left{
                width: 90vw;
            }
            .plan-card {
                width: 90vw;
            }
        }
    }

    .card-logo {
        width: 50px;
        height: 50px;
        padding: 15px;

        svg {
            width: 20px;
            height: 20px;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
}
</style>