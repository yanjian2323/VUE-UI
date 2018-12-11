<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'YLayout',
        data() {
            return {
                layoutClass: []
            }
        },
        mounted() {
            const {$children} = this
            $children.forEach((vm) => {
                const {name} = vm.$options
                if (name === 'YSlider') {
                    this.layoutClass = ['has-slider-layout']
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.has-slider-layout {
            flex-direction: row;
        }
    }
</style>