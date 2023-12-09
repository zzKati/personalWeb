<script setup>
import { webThemeStore } from '../stores/Theme'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)
const webTheme = webThemeStore()
onMounted(() => {
    gsap.from('.contact-subtitle,.contact-title', {
        duration: 0.5,
        y: "+=100",
        opacity: 0,
        scale: 0.1,
        ease: "back.out",
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 70%',
            end: '50% 50%',
            // markers: true, 
            toggleActions:"play reverse play reverse"
    
        }
    })
    gsap.from('.contact-info', {
        duration: 1,
        y: '+=300',
        opacity: 0,
        scale: 0.1,
        ease: "back.out",
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: '20% 70%',
            end: '80% 50%',
            toggleActions: "play reverse play reverse",
            // markers:true
        }
    })
})
</script>

<template>
    <div class="contact-wrapper" :class="{ 'contact-wrapper-dark': webTheme.isDark }" id="contact">
        <div class="contact-content">
            <div class="contact-subtitle">
                Let's Talk
            </div>
            <div class="contact-title" :class="{ 'contact-title-dark': webTheme.isDark }">
                Have a Project Idea?
                <br>
                Feel Free to Contact
            </div>
            <div class="contact-info">
                <div class="info-card">
                    <div class="info-img">
                        <font-awesome-icon :icon="['fab', 'qq']" />
                    </div>
                    <div class="info-detail">
                        <div class="info-title">QQ:</div>
                        <div class="detail">3079791498</div>
                    </div>
                </div>
                <div class="info-card">
                    <div class="info-img">
                        <font-awesome-icon :icon="['far', 'envelope']" />
                    </div>
                    <div class="info-detail">
                        <div class="info-title">Email:</div>
                        <div class="detail">3079791498@qq.com</div>
                    </div>
                </div>
                <div class="info-card">
                    <div class="info-img">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                    </div>
                    <div class="info-detail">
                        <div class="info-title">Location:</div>
                        <div class="detail">GuangXi GuiLin</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.contact-wrapper {
    width: 100%;
    height: 980px;
    box-sizing: border-box;
    background-color: white;
    transition: all .5s;
    overflow: hidden;
}

.contact-wrapper-dark {
    background-color: rgb(33, 39, 54);
}

.contact-content {
    width: 1100px;
    padding-top: 150px;
    margin: 0 auto;
}

.contact-subtitle {
    color: rgb(122, 73, 254);
    text-align: center;
    font-weight: 700;
}

.contact-title {
    text-align: center;
    font-size: 42px;
    color: rgb(63, 57, 109);
    font-weight: 700;
}

.contact-title-dark {
    color: white;
}

.contact-info {
    width: 500px;
    height: 470px;
    background-color: #7a49fe;
    background: linear-gradient(121.77deg, #7141fb 13.51%, #4b14e8 174.68%);
    border-radius: 15px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 75px;
    box-sizing: border-box;
}

.info-card {
    width: 400px;
    height: 100px;
    display: flex;
    margin-bottom: 30px;
}

.info-img {
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid white;

    svg {
        width: 30px;
        height: 30px;
        padding: 18px;
        color: white;
    }
}

.info-detail {
    margin-left: 30px;
    color: white;
}

.info-title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}

.detail {
    font-size: 20px;
}

@media screen and (max-width: 1200px) {

    .contact-wrapper{
        .contact-content{
        width:90vw;
    }

    }

}

@media screen and (max-width:600px) {
    .contact-title{
        font-size: 6vw;
    }

    .contact-info{
        width: 90vw;
        height: 80vw;
        min-height: 400px;
        padding: 50px;
    }

    .info-card{
        width: 90vw;
        margin-bottom: 0px;
    }

    .info-title{
        font-size: 20px;
    }

    .detail{
        font-size: 16px;
    }

}  

@media screen and (max-width:500px){
    .contact-wrapper{
        height: 800px;
    }
    .contact-info{
        padding: 25px;
        min-height: 330px
    }
}
</style>