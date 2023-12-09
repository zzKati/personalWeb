<script setup>
import { webThemeStore } from '../stores/Theme'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted } from 'vue';
const webTheme = webThemeStore()
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
    gsap.from('.flex-wrapper', {
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scale: 0.1,
        y: '+=100',
        ease: "back.out",
        scrollTrigger: {
            trigger: '.skills-wrapper',
            // markers: true,
            start: "30% 70%",
            end: "80% 40%",
            toggleActions: 'play reverse play reverse'
            // scrub:true
        }
    })
})


</script>

<template>
    <div class="skills-wrapper" :class="{ 'skills-wrapper-dark': webTheme.isDark }" id="skills">
        <div class="skills-content">
            <div class="skills-subtitle">Skills</div>
            <div class="skills-title" :class="{ 'skills-title-dark': webTheme.isDark }">
                Some of My
                <br>
                Working Tools
            </div>
            <div class="skills-main">
                <div class="skills-tools">
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/html-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">HTML</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/css-logo.svg" :class="{ 'tool-description-dark': webTheme.isDark }">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">CSS</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/javascript-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">JavaScript</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/nodejs-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Node.JS</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/vue-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Vue.JS</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/figma-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Figma</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/axios-logo.svg">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Axios</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/echarts-logo.png">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Echarts</p>
                        </div>
                    </div>
                    <div class="flex-wrapper">
                        <div class="skills-tool" :class="{ 'skills-tool-dark': webTheme.isDark }">
                            <div class="tool-wrapper">
                                <img src="../assets/font-awesome-logo.png">
                            </div>
                            <p class="tool-description" :class="{ 'tool-description-dark': webTheme.isDark }">Font-Awesome
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.skills-wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 1000px;
    background-color: rgb(246, 248, 254);
    transition: all .5s;
    overflow: hidden;
    .skills-content {
        width: 1100px;
        margin: 0 auto;
        padding-top: 100px;

        .skills-subtitle {
            font-size: 20px;
            font-weight: 700;
            color: rgb(122, 73, 254);
            text-align: center;
        }

        .skills-title {
            font-size: 42px;
            font-weight: 800;
            text-align: center;
            color: rgb(63, 57, 109);
        }

        .skills-title-dark {
            color: white;
        }

        .skills-main {
            width: 900px;
            min-width: 400px;
            margin: 0 auto;
            margin-top: 50px;
        }

        .skills-tools {
            display: flex;
            flex-wrap: wrap;

            .flex-wrapper {
                width: 33.3%;

                .skills-tool {
                    width: 185px;
                    height: 130px;
                    background-color: white;
                    overflow: hidden;
                    margin: 0 auto;
                    margin-top: 50px;
                    box-shadow: 0 0 85px 0 #e9eefc;
                    border-radius: 10px;
                    transition: all .5s;

                    // flex:0;
                    .tool-wrapper {
                        width: 55px;
                        height: 55px;
                        margin: 0 auto;
                        margin-top: 20px;
                        border-radius: 50%;
                        border: 2px solid rgb(122, 73, 254);

                        img {
                            padding: 13.75px;
                            width: 27.5px;
                            height: 27.5px;
                        }



                    }
                }

                .skills-tool-dark {
                    background-color: rgb(33, 39, 54);
                    box-shadow: 0 0 85px 0 #2f2f2f;
                }

            }

            .skills-tool:hover {
                transform: scale(1.2);
                box-shadow: 0 0 85px 0 #e9eefc,
                    0px 30px 60px 2px rgba(0, 0, 0, 0.1);

            }

            .skills-tool-dark:hover {
                transform: scale(1.2);
                box-shadow: 0 0 85px 0 #2f2f2f,
                    0px 30px 60px 2px rgb(73, 73, 73);

            }




        }
    }
}

.tool-description {
    margin-top: 10px;
    text-align: center;
    color: rgb(63, 57, 109);
    font-weight: 500;
    font-size: 18px;
}

.tool-description-dark {
    color: white;
}

.skills-tool:hover .tool-description {
    color: rgb(122, 73, 254);
    // background-color: #bfa;
}

.skills-wrapper-dark {
    background-color: rgb(29, 34, 48);
}

@media screen and (max-width: 1200px) {

    .skills-wrapper {
        .skills-content {
            width: 90vw;

        }

    }

}

@media screen and (max-width:1000px) {
    .skills-wrapper {
        .skills-content {
            width: 90vw;

            .skills-main {
                width: 90vw;
            }
        }

    }
}

@media screen and (max-width:760px) {
    .skills-wrapper {
        height: 1250px;
        .skills-content {

            .skills-tools {
                .flex-wrapper {
                    width: 50%;
                }
            }
        }
    }
}
</style>
