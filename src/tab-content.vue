<template>
    <div class="tab-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YTabContent"
    }
</script>

<style scoped lang="scss">
    .tab-content {
        padding: 1em;
    }
</style>