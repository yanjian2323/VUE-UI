<template>
    <div class="tab-nav">
        <slot></slot>
        <div class="line"></div>
        <div class="button">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YTabNav"
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
            border: 1px solid $line-color;
            position: absolute;
            bottom: 0;
            width: 60px;
        }
        > .button {
            margin-left: auto;
        }
    }
</style>