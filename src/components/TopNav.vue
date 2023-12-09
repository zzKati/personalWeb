<script setup>
import { ref } from 'vue';
import { webThemeStore } from '../stores/Theme'
const webTheme = webThemeStore()
const isActive = ref(false)
const changeActive = () => {
    isActive.value = !isActive.value
}
</script>

<template>
    <div class="top-nav-wrapper" :class="{ 'top-nav-wrapper-dark': webTheme.isDark }">
        <div class="top-nav-content">
            <div class="left-nav" :class="{ 'left-nav-dark': webTheme.isDark }">
                <a href="">Kat.</a>
            </div>
            <div class="right-nav">
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#home">Home</a>
                </div>
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#about"> About</a>
                </div>
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#skills">Skills</a>
                </div>
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#achievement">Achieve</a>
                </div>
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#plan">Plan</a>
                </div>
                <div class="nav-items" :class="{ 'nav-items-dark': webTheme.isDark }">
                    <a href="#contact">Contact</a>
                </div>
                <div class="moon" @click="webTheme.changeTheme">
                    <font-awesome-icon v-if="!webTheme.isDark" :icon="['far', 'moon']" />
                    <font-awesome-icon v-if="webTheme.isDark" :icon="['far', 'sun']"
                        :class="{ 'svg-dark': webTheme.isDark }" />
                </div>
                <div class="open-nav" :class="{ 'open-dark': webTheme.isDark }">
                    <font-awesome-icon :icon="['fa', 'bars']" v-if="!isActive" @click="changeActive" />
                    <font-awesome-icon :icon="['fa', 'xmark']" v-if="isActive" @click="changeActive" />
                </div>
            </div>
        </div>
    </div>
    <Transition>
        <div class="second-nav" :class="{ 'second-nav-dark': webTheme.isDark }" v-if="isActive">
            <div class="second-content">
                <a href="#home" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['fa', 'house']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        Home
                    </div>
                </a>
                <a href="#about" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['far', 'user']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        About
                    </div>
                </a>
                <a href="#skills" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['fab', 'superpowers']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        Skills
                    </div>
                </a>
                <a href="#achievement" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['far', 'star']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        Achieve
                    </div>
                </a>
                <a href="#plan" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['fa', 'list-ul']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        Plan
                    </div>
                </a>
                <a href="#contact" class="second-nav-items" @click="changeActive">
                    <div class="second-img" :class="{ 'second-img-dark': webTheme.isDark }">
                        <font-awesome-icon :icon="['fa', 'phone']" />
                    </div>
                    <div class="second-title" :class="{ 'second-title-dark': webTheme.isDark }">
                        Contact
                    </div>
                </a>
            </div>
        </div>
    </Transition>
</template>


<style lang="less" scoped>
.top-nav-wrapper {
    width: 100%;
    height: 9vh;
    background-color: white;
    z-index: 100;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    transition: all .5s;
    overflow: hidden;
    .top-nav-content {
        width: 1100px;
        margin: 0 auto;
        line-height: 9vh;

        .left-nav {
            float: left;

            a {
                font-size: 22px;
                font-weight: 700;
                color: rgb(63, 57, 109);
            }
        }

        .left-nav-dark {
            a {
                color: white;
            }
        }

        .right-nav {
            float: right;
            display: flex;

            .nav-items {
                width: 90px;
                display: flex;
                justify-content: center;
                position: relative;
                transition: all .5s;

                a {
                    font-size: 18px;
                    color: rgb(63, 57, 109);
                }
            }

            .nav-items-dark {
                a {
                    color: white;
                }
            }

            .nav-items::before {
                content: "";
                background-color: rgb(122, 73, 254);
                height: 3px;
                width: 0;
                position: absolute;
                border-radius: 4px;
                bottom: 0;
                transition: all .5s;

            }

            .moon {
                cursor: pointer;
                margin-left: 10px;
                margin-right: 10px;

                svg {
                    color: rgb(63, 57, 109);
                    width: 16px;
                    height: 16px;
                }

                .svg-dark {
                    color: white;
                }
            }

            .nav-items :hover {
                color: rgb(122, 73, 254);
            }

            .nav-items:hover::before {
                width: 100%;
            }
        }
    }
}

.open-nav {
    display: none;

    svg {
        width: 16px;

    }
}

.open-dark {
    svg {
        color: white;
    }
}

.top-nav-wrapper-dark {
    background-color: rgb(33, 39, 54);
}

.second-nav {
    position: fixed;
    top: 9vh;
    z-index: 100;
    width: 100%;
    height: 91vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.second-nav-dark {
    background-color: rgb(33, 39, 54);
}

.second-content {
    width: 200px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
}

.second-nav-items {
    display: block;
    width: 50%;
    height: 33.3%;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all .5s;
}

.second-nav-items:hover {
    background-color: rgb(111, 63, 250);

    .second-img {
        svg {
            color: white;
        }
    }

    .second-title {
        color: white;
    }
}

.second-img {
    width: 25px;
    height: 25px;
    margin-bottom: 5px;

    svg {
        color: #3f396d;
        width: 25px;
        height: 25px;
    }
}

.second-img-dark {
    svg {
        color: white;
    }
}

.second-title {
    color: #3f396d;
    text-align: center;
}

.second-title-dark {
    color: white;
}

@keyframes nav-come {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.v-enter-active {
    animation: nav-come .5s;
}

.v-leave-active {
    animation: nav-come .5s reverse;
}

@media screen and (min-width:1000px) and (max-width: 1200px) {

    .top-nav-wrapper {
        .top-nav-content {
            width: 90vw;
        }
    }

}

@media screen  and (max-width: 1000px) {
    .top-nav-wrapper {
        .top-nav-content {
            width: 90vw;
            .right-nav {
                .nav-items {
                    display: none;
                }
                .open-nav{
                    display: block;
                }
            }
        }

    }

}
</style>