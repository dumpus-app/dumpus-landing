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
            <a href="/" target="_self">Home</a>
            <a href="https://github.com/dumpus-app/dumpus-app/releases" target="_blank"
                >What's New</a
            >
            <a href="/legal/privacy" target="_self">Privacy Policy</a>
            <a href="/legal/terms" target="_self">Terms & Conditions</a>
            <a href="/help" target="_self">Help</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style>
@import url('@/assets/css/utils/footer/footer.css');
</style>
