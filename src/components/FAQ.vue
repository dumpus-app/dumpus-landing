<template>
    <h2 @click="toggle">{{ question }}</h2>
    <div
        :style="{
            display: open ? 'block' : 'none',
        }"
        v-html="renderMarkdown(answer)"
    ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const renderMarkdown = (content: string) => md.render(content);

const { question, answer } = defineProps<{ question: string; answer: string }>();

const open = ref(false);

function toggle() {
    open.value = !open.value;
}
</script>
