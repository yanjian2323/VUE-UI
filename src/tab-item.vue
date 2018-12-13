<template>
    <div class="tab-item active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YTabItem"
    }
</script>

<style scoped lang="scss">
    $tab-active-color: #4A90E2;
    .tab-item {
        padding: 0 1em;
        &.active {
            color: $tab-active-color;
        }
    }
</style>