<template>
    <button class="y-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg class="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left'
            }
        }
    }
</script>
<style>
    .y-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
    }
    .icon {
        width: 1em;
        height: 1em;
    }
</style>