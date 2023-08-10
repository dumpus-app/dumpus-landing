<template>
    <div class="imageWrapper">
        <div class="container">
            <NavComponent />
            <router-view />
            <FooterComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
import NavComponent from '@/components/nav/Nav.vue';
import FooterComponent from '@/components/footer/Footer.vue';
</script>
