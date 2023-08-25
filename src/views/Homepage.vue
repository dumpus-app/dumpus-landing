<template>
    <div class="iphonePreview">
        <div class="videoContainer hidden">
            <video class="screenvideo" autoplay="true" controls="true"></video>
        </div>
        <img class="iphoneScreen" src="@/assets/img/screenshot/framed_screenshot.png" alt="" />
    </div>
    <div class="appInfo">
        <div class="appIconShadow">
            <svg width="0" height="0">
                <defs>
                    <clipPath id="shape120">
                        <path
                            id="shape"
                            class="cls-1"
                            d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                            transform="translate(-6701 -458)"
                            filter="url(#f1)"
                        />
                    </clipPath>
                </defs>
            </svg>
            <img class="appIconLarge" src="@/assets/img/appicon.png" />
        </div>
        <div class="appNamePriceContainer">
            <h1 class="appName">Dumpus - Stats for Discord</h1>
            <h2 class="appPrice">Free</h2>
        </div>
        <div class="appDescriptionContainer">
            <p class="appDescription">
                Wish you had a pretty Discord version of Spotify Wrapped? Generate yours at any time
                thanks to your Discord Data Package!
            </p>
        </div>
        <div class="downloadButtonsContainer">
            <a
                class="playStoreLink"
                href="https://play.google.com/store/apps/details?id=app.dumpus.app"
                ><img class="playStore" src="@/assets/img/playstore.png"
            /></a>
            <a
                class="appStoreLink"
                href="https://apps.apple.com/us/app/dumpus-stats-for-discord/id6450952260"
                ><img class="appStore" src="@/assets/img/appstore.png"
            /></a>
            <div class="webAppLink" v-if="isViewingOnWeb">
                <a href="https://web.dumpus.app">Try on web</a>
            </div>
        </div>
    </div>
    <div class="features">
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-clock fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Different time ranges</h3>
                <p>
                    All stats in the app can be checked in 3 different time ranges&#58; 4 weeks, 6
                    months and lifetime so you can seamlessly see how your activity evolved over
                    time.
                </p>
            </div>
        </div>
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-magic fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Top users & servers</h3>
                <p>
                    Check which servers and users you talk the most on/with. Calculated with machine
                    learning based on, you can also get the chat sentiment score.
                </p>
            </div>
        </div>
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-lock fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Open Source</h3>
                <p>
                    Privacy is key. Anyone can read our code, and run all the calculation locally.
                    In all cases, your data can only be read thanks to a key kept in your device.
                </p>
            </div>
        </div>
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-chart-bar fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Activity over time</h3>
                <p>
                    See what time of day you're most active, and check your Discord activity over
                    time with graphs.
                </p>
            </div>
        </div>
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-flask fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Funny science stuff</h3>
                <p>
                    How many time did your app crash? How many bots have you added on Discord? How
                    many messages have you edited? Find out!
                </p>
            </div>
        </div>
        <div class="feature">
            <div>
                <span class="fa-stack fa-1x">
                    <i class="iconBack fas fa-circle fa-stack-2x"></i>
                    <i class="iconTop fas fa-history fa-stack-1x"></i>
                </span>
            </div>
            <div class="featureText">
                <h3>Time spent on Discord</h3>
                <p>
                    This is an experimental feature, but in this first version the app can also
                    calculate how much time you spent on Discord and in voice channels.
                </p>
            </div>
        </div>
    </div>
    <div class="threeScreensSection">
        <img class="threeScreens" src="@/assets/img/screenshot/three_screen.png" alt="" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isViewingOnWeb = ref(false);

function setStyles({ reset = false }: { reset?: boolean } = {}) {
    const el = document.getElementsByClassName('imageWrapper')[0] as HTMLDivElement;
    el.style.height = reset ? '' : '800px';
    el.style.background = reset ? '' : 'var(--color-gray-900)';
    el.style.backgroundRepeat = reset ? '' : 'no-repeat';
    el.style.backgroundSize = reset ? '' : 'cover';
    el.style.backgroundPosition = reset ? '' : 'top';
    el.style.borderRadius = reset ? '' : '0px 0px 40px 40px';
}

onMounted(() => {
    isViewingOnWeb.value = window.matchMedia('(display-mode: browser)').matches;
    setStyles();
});

onUnmounted(() => {
    setStyles({ reset: true });
});
</script>

<style src="@/assets/css/homepage.css" scoped></style>
