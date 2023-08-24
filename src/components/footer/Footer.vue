<template>
    <footer>
        <p class="footerText">
            Made by <a href="https://github.com/Androz2091">Androz2091</a> in France
        </p>
        <div class="footerIcons">
            <a href="https://androz2091.fr/discord">
                <span class="fa-stack fa-1x">
                    <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
                    <i class="socialIconTop fab fa-discord fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://github.com/dumpus-app">
                <span class="fa-stack fa-1x">
                    <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
                    <i class="socialIconTop fab fa-github fa-stack-1x"></i>
                </span>
            </a>
            <a href="mailto:contact@dumpus.app">
                <span class="fa-stack fa-1x">
                    <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
                    <i class="socialIconTop fas fa-envelope fa-stack-1x"></i>
                </span>
            </a>
        </div>
        <div class="footerLinks">
            <router-link to="/" target="_self">Home</router-link>
            <a href="https://github.com/dumpus-app/dumpus-app/releases" target="_blank"
                >What's New</a
            >
            <router-link to="/legal/privacy" target="_self">Privacy Policy</router-link>
            <router-link to="/legal/terms" target="_self">Terms & Conditions</router-link>
            <router-link to="/help" target="_self">Help</router-link>
        </div>
    </footer>
</template>

<style src="@/assets/css/utils/footer/footer.css" scoped></style>
