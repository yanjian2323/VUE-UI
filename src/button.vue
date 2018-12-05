<template>
    <button class="y-button" :class="{[`icon-${iconPosition}`]: true}">
        <y-icon :icon="icon"></y-icon>
        <slot></slot>
    </button>
</template>
<script>
    import yIcon from './icon';
    export default {
        props: {
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left'
            }
        },
        components: {
            yIcon
        }
    }
</script>
<style lang="scss">
    .y-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        &:hover{
            border: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
    }
</style>