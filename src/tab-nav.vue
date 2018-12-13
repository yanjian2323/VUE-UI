<template>
    <div class="tab-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="button">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YTabNav",
        inject: ['eventBus'],
        mounted() {
            const {eventBus} = this
            eventBus.$on('updated:tab', (tabItemName, vm) => {
                const { left, width } = vm.$el.getBoundingClientRect()
                const lineNode = this.$refs.line
                lineNode.style.width = `${width}px`
                lineNode.style.left = `${left}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $border-bottom-color: #ddd;
    $tab-nav-height: 40px;
    $line-color: #4A90E2;
    .tab-nav {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $border-bottom-color;
        height: $tab-nav-height;
        position: relative;

        > .line {
            transition: all 0.5s;
            border: 1px solid $line-color;
            position: absolute;
            bottom: 0;
        }

        > .button {
            margin-left: auto;
        }
    }
</style>